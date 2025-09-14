import { Test, TestingModule } from '@nestjs/testing';
import { ServicesMarketplaceController } from './services-marketplace.controller';
import { ServicesMarketplaceService } from './services-marketplace.service';

describe('ServicesMarketplaceController', () => {
  let servicesMarketplaceController: ServicesMarketplaceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicesMarketplaceController],
      providers: [ServicesMarketplaceService],
    }).compile();

    servicesMarketplaceController = app.get<ServicesMarketplaceController>(ServicesMarketplaceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicesMarketplaceController.getHello()).toBe('Hello World!');
    });
  });
});
