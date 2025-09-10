import { Controller, Get } from '@nestjs/common';
import { DeliveryServicesService } from './delivery-services.service';

@Controller()
export class DeliveryServicesController {
  constructor(private readonly deliveryServicesService: DeliveryServicesService) {}

  @Get()
  getHello(): string {
    return this.deliveryServicesService.getHello();
  }
}
