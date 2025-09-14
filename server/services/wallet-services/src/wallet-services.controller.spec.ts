import { Test, TestingModule } from '@nestjs/testing';
import { WalletServicesController } from './wallet-services.controller';
import { WalletServicesService } from './wallet-services.service';

describe('WalletServicesController', () => {
  let walletServicesController: WalletServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WalletServicesController],
      providers: [WalletServicesService],
    }).compile();

    walletServicesController = app.get<WalletServicesController>(WalletServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(walletServicesController.getHello()).toBe('Hello World!');
    });
  });
});
