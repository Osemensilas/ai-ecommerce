import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const port = process.env.PORT || 8000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
