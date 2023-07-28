import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AuthController } from './auth.controller';


@Global()
@Module({
  controllers: [AuthController]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({path: 'login', method: RequestMethod.POST})
      .forRoutes('login');
  }
}