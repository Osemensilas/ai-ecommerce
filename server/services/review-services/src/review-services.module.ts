import { Module } from '@nestjs/common';
import { ReviewServicesController } from './review-services.controller';
import { ReviewServicesService } from './review-services.service';

@Module({
  imports: [],
  controllers: [ReviewServicesController],
  providers: [ReviewServicesService],
})
export class ReviewServicesModule {}
