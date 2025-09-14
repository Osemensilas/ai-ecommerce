import { NestFactory } from '@nestjs/core';
import { WalletServicesModule } from './wallet-services.module';

async function bootstrap() {
  const app = await NestFactory.create(WalletServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
