import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';

@Controller()
export class AuthController {
  
  @Get('login')
  login(): string {
    return 'login';
  }


}