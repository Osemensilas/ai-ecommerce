import { NestFactory } from '@nestjs/core';
import { ReviewServicesModule } from './review-services.module';

async function bootstrap() {
  const app = await NestFactory.create(ReviewServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
