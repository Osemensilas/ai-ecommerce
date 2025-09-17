import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async getUsers() {
    const user = await this.authServiceService.findUsers();
    if (!user) {
      throw new NotFoundException(`No users found`);
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.authServiceService.findUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Public route: Register
  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authServiceService.createUser(body.username, body.password, body.email);
  }

  // Public route: Login
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authServiceService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { message: 'Login successful', ...this.authServiceService.generateToken(user) };
  }

  @Get()
  getHello(): string {
    return this.authServiceService.getHello();
  }
}
