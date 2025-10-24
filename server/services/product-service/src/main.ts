import { NestFactory } from '@nestjs/core';
import { ProductServiceModule } from './product-service.module';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // 👇 Load environment variables from .env file
  dotenv.config();

  const app = await NestFactory.create(ProductServiceModule);

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.enableCors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        'http://localhost:3000',
        'https://ahiaglobal.onrender.com',
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed for this origin: ' + origin), false);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ],
    optionsSuccessStatus: 200,
  });

  // 👇 Use your env variable (fallback to 8082 if missing)
  const port =  8083;

  await app.listen(port);
  console.log(`✅ Product Service running on: ${await app.getUrl()}`);
}

bootstrap();
