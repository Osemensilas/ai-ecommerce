import { Controller, Get } from '@nestjs/common';
import { BookingServicesService } from './booking-services.service';

@Controller()
export class BookingServicesController {
  constructor(private readonly bookingServicesService: BookingServicesService) {}

  @Get()
  getHello(): string {
    return this.bookingServicesService.getHello();
  }
}
