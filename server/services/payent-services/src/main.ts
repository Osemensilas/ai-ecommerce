import { NestFactory } from '@nestjs/core';
import { PayentServicesModule } from './payent-services.module';

async function bootstrap() {
  const app = await NestFactory.create(PayentServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
