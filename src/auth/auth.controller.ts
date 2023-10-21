import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Public } from './decorators/public.decorator';
import { SignUpDto } from './dtos/sign-up.dto';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Public()
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }


}