import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private userService: UserService
) {}

async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('AuthGuard');
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
    context.getHandler(),
    context.getClass(),
    ]);
    if (isPublic) {
        // 💡 See this condition
        return true;
    }  
    
    const request = context.switchToHttp().getRequest();
    console.log('request.headers', request.headers);
    
    const token = this.extractTokenFromHeader(request);
    if (!token) {
    throw new UnauthorizedException();
    }
    try {
    const payload = await this.jwtService.verifyAsync(
        token,
        {
        secret: 'secret' // gamosayenebelia config
        }
    );
    // 💡 We're assigning the payload to the request object here
    // so that we can access it in our route handlers
        request['user'] = await this.userService.findById(payload.sub);
        
    } catch {
    throw new UnauthorizedException();
    }
    return true;
}

private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
}
}