import { Controller, Get } from '@nestjs/common';
import { ReviewServicesService } from './review-services.service';

@Controller()
export class ReviewServicesController {
  constructor(private readonly reviewServicesService: ReviewServicesService) {}

  @Get()
  getHello(): string {
    return this.reviewServicesService.getHello();
  }
}
