import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import CustomConfig from './config/custom/custom.config'
import { validate } from './config/env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { UserModule } from './user/user.module';
import { BullModule } from '@nestjs/bull';
import { LoggerModule } from './common/logger/logger.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { RoleModule } from './role/role.module';
import { migrations } from './database/migrations';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CartItemModule } from './cart-item/cart-item.module';
import { SaleModule } from './sale/sale.module';
import { PaymentAccountModule } from './payment-account/payment-account.module';


@Module({
  imports: [
    BookModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['src/config/envs/dev.env'],
      load: [CustomConfig],
      validate
    }),
    TypeOrmModule.forRoot({
      // imports: [DatabaseModule],
      // useClass: TypeOrmConfigService,
      // name: 'postgresql connection'
        type: 'postgres',
        host: 'localhost',
        port: 5439,
        username: 'app',
        password: 'app123',
        database: 'postgres',
        namingStrategy: new SnakeNamingStrategy(),
        migrations,
        synchronize: false,
        autoLoadEntities: true,
        migrationsRun: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    LoggerModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    RoleModule,
    CartItemModule,
    SaleModule,
    PaymentAccountModule
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],

})
export class AppModule {}
