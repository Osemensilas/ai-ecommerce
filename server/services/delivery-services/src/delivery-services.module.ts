import { Module } from '@nestjs/common';
import { DeliveryServicesController } from './delivery-services.controller';
import { DeliveryServicesService } from './delivery-services.service';

@Module({
  imports: [],
  controllers: [DeliveryServicesController],
  providers: [DeliveryServicesService],
})
export class DeliveryServicesModule {}
