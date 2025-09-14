import { Controller, Get } from '@nestjs/common';
import { PayentServicesService } from './payent-services.service';

@Controller()
export class PayentServicesController {
  constructor(private readonly payentServicesService: PayentServicesService) {}

  @Get()
  getHello(): string {
    return this.payentServicesService.getHello();
  }
}
