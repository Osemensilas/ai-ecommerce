import { NestFactory } from '@nestjs/core';
import { ServicesMarketplaceModule } from './services-marketplace.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicesMarketplaceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
