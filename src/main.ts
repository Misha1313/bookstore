import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './common/logger/logger.service';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression'
import helmet from 'helmet';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

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
    .addSecurityRequirements('bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const kafka = await app.connectMicroservice<MicroserviceOptions>({
    
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'hero',
        brokers: ['localhost:29092'],
      },
      consumer: {
        groupId: 'hero-consumer'
      }
    }
      
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
