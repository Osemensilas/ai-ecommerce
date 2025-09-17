import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
<<<<<<< HEAD
  await app.listen(process.env.port ?? 8000);
  console.log(`API Gateway is running on: ${await app.getUrl()}`);
=======
  const port = process.env.PORT || 8000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
>>>>>>> 5884bdae93db54d071aa7896715f715bd7dcc462
}
bootstrap();
