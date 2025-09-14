import { NestFactory } from '@nestjs/core';
import { DeliveryServicesModule } from './delivery-services.module';

async function bootstrap() {
  const app = await NestFactory.create(DeliveryServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
