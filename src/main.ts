import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    logger:true,
    cors:true,
    bodyParser:true,
  });
  app.setGlobalPrefix('api');
  Logger.log('App listen on port 3000');
  await app.listen(3000);
}
bootstrap();
