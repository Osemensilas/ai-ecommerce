import { NestFactory } from '@nestjs/core';
import { ProductServiceModule } from './product-service.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(ProductServiceModule);

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  // ✅ Correct CORS setup
  app.enableCors({
    origin: ['http://localhost:3000'], // frontend URL
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const port = process.env.PORT ?? 8080;
  await app.listen(port);
  console.log(`✅ Product Service running on: ${await app.getUrl()}`);
}

bootstrap();
