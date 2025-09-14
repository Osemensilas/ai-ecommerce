import { Module } from '@nestjs/common';
import { ServicesMarketplaceController } from './services-marketplace.controller';
import { ServicesMarketplaceService } from './services-marketplace.service';

@Module({
  imports: [],
  controllers: [ServicesMarketplaceController],
  providers: [ServicesMarketplaceService],
})
export class ServicesMarketplaceModule {}
