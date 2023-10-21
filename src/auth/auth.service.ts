import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dtos/sign-up.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);

    if(!user) {
      throw new UnauthorizedException('wrong email or password');
    }

    const passwordsMatch = await bcrypt.compare(signInDto.password, user?.password);
    if(!passwordsMatch) {
        throw new UnauthorizedException('wrong email or password');
    }
    

    const payload = { sub: user.id, email: user.email };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }

  async signUp(signUpDto: SignUpDto) {

    return this.userService.create(signUpDto);

  }
  
}