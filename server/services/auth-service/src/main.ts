import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

async function bootstrap() {
  // 👇 Load .env file explicitly from root
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });

  const app = await NestFactory.create(AuthServiceModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://ahiaglobal.onrender.com',
    ],
    credentials: true,
  });

  const port =  8081;
  await app.listen(port);
  console.log(`✅ Auth Service running on: ${await app.getUrl()}`);
}

bootstrap();
