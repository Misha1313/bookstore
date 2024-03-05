import { Body, Controller, Get, Param, Post, Req, Request, UseGuards } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Public } from './decorators/public.decorator';
import { SignUpDto } from './dtos/sign-up.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AuthGuard as AuthGuardLocal } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { RefreshJwtGuard } from './guards/refresh-jwt.guard';

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  // @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Req() req, @Body() signinDto: SignInDto) {
    return this.authService.signIn(req.user);
  }

  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh-token')
  async refreshToken(@Req() req) {
    const payload = await this.authService.refreshToken(req.user);
    console.log('user', req.user);
    console.log('payload', payload);
    return payload;
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  logOut(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }


}