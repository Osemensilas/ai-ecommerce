import { Test, TestingModule } from '@nestjs/testing';
import { ReviewServicesController } from './review-services.controller';
import { ReviewServicesService } from './review-services.service';

describe('ReviewServicesController', () => {
  let reviewServicesController: ReviewServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReviewServicesController],
      providers: [ReviewServicesService],
    }).compile();

    reviewServicesController = app.get<ReviewServicesController>(ReviewServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reviewServicesController.getHello()).toBe('Hello World!');
    });
  });
});
