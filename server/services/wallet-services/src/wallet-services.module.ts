import { Module } from '@nestjs/common';
import { WalletServicesController } from './wallet-services.controller';
import { WalletServicesService } from './wallet-services.service';

@Module({
  imports: [],
  controllers: [WalletServicesController],
  providers: [WalletServicesService],
})
export class WalletServicesModule {}
