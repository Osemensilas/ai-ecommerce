import { NestFactory } from '@nestjs/core';
import { BookingServicesModule } from './booking-services.module';

async function bootstrap() {
  const app = await NestFactory.create(BookingServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
