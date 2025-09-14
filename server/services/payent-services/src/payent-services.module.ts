import { Module } from '@nestjs/common';
import { PayentServicesController } from './payent-services.controller';
import { PayentServicesService } from './payent-services.service';

@Module({
  imports: [],
  controllers: [PayentServicesController],
  providers: [PayentServicesService],
})
export class PayentServicesModule {}
