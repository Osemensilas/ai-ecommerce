import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    allowedHeaders: '*', // Allow all headers 
  });
  const port = process.env.PORT || 8000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
} 

bootstrap();
