import { Module } from '@nestjs/common';
import { BookingServicesController } from './booking-services.controller';
import { BookingServicesService } from './booking-services.service';

@Module({
  imports: [],
  controllers: [BookingServicesController],
  providers: [BookingServicesService],
})
export class BookingServicesModule {}
