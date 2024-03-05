import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dtos/sign-up.dto';
import * as bcrypt from "bcrypt";
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { JwtPayloadDto } from './dtos/jwt-payload.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    
    if (!user) {
      return null;
    }

    const passwordsMatch = await bcrypt.compare(pass, user?.password);
    if(!passwordsMatch) {
      return null;
    }
    return user;
  }

  async signIn(user: User) {
    // const user = await this.userService.findByEmail(signInDto.email);

    // if(!user) {
    //   throw new UnauthorizedException('wrong email or password');
    // }

    // const passwordsMatch = await bcrypt.compare(signInDto.password, user?.password);
    // if(!passwordsMatch) {
    //     throw new UnauthorizedException('wrong email or password');
    // }
    

    const payload = { sub: user.id, email: user.email };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {expiresIn: '7d'})
    };

  }

  async signUp(createUserDto: CreateUserDto) {

    return this.userService.create(createUserDto);

  }

  async refreshToken(payload: any) {

    console.log('refresh token service pl', payload);
    return {
      access_token: await this.jwtService.signAsync(payload)
    };

  }
  
}