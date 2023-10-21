import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './common/logger/logger.service';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression'
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useLogger(app.get(LoggerService));
  app.use(helmet());
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // forbidNonWhitelisted : true,
      transform: true
    })
  );

  app.enableVersioning();

  app.use(compression());


  const config = new DocumentBuilder()
    .setTitle('Book Store')
    .setDescription('The Book Store API description')
    .setVersion('1.0')
    .addTag('book')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
