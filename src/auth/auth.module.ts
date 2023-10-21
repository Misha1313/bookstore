import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';


@Global()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '3600s' },
    })

    // JwtModule.registerAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     global: true,
    //     secret: configService.get('JWT_SECRET'),
    //     signOptions: { expiresIn: configService.get('JWT_EXPIRATION_TIME') }
    //   }),
    //   inject: [ConfigService]
    // })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard]
})
export class AuthModule {
 
}