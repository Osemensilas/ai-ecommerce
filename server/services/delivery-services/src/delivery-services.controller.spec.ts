import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryServicesController } from './delivery-services.controller';
import { DeliveryServicesService } from './delivery-services.service';

describe('DeliveryServicesController', () => {
  let deliveryServicesController: DeliveryServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryServicesController],
      providers: [DeliveryServicesService],
    }).compile();

    deliveryServicesController = app.get<DeliveryServicesController>(DeliveryServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(deliveryServicesController.getHello()).toBe('Hello World!');
    });
  });
});
