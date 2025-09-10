import { Controller, Get } from '@nestjs/common';
import { ServicesMarketplaceService } from './services-marketplace.service';

@Controller()
export class ServicesMarketplaceController {
  constructor(private readonly servicesMarketplaceService: ServicesMarketplaceService) {}

  @Get()
  getHello(): string {
    return this.servicesMarketplaceService.getHello();
  }
}
