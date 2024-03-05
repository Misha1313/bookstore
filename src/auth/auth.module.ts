import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';
import { RefreshJwtGuard } from './guards/refresh-jwt.guard';


@Global()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule


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
  providers: [
    AuthService,
    AuthGuard,
    LocalStrategy,
    LocalAuthGuard,
    JwtStrategy,
    JwtAuthGuard,
    RefreshJwtStrategy,
    RefreshJwtGuard
  ],
  exports: [AuthGuard]
})
export class AuthModule {
 
}