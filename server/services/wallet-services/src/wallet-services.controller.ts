import { Controller, Get } from '@nestjs/common';
import { WalletServicesService } from './wallet-services.service';

@Controller()
export class WalletServicesController {
  constructor(private readonly walletServicesService: WalletServicesService) {}

  @Get()
  getHello(): string {
    return this.walletServicesService.getHello();
  }
}
