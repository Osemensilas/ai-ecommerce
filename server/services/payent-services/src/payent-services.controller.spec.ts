import { Test, TestingModule } from '@nestjs/testing';
import { PayentServicesController } from './payent-services.controller';
import { PayentServicesService } from './payent-services.service';

describe('PayentServicesController', () => {
  let payentServicesController: PayentServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PayentServicesController],
      providers: [PayentServicesService],
    }).compile();

    payentServicesController = app.get<PayentServicesController>(PayentServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(payentServicesController.getHello()).toBe('Hello World!');
    });
  });
});
