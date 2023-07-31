import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    
    if (!roles) {
      console.log('no role');
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // throw new UnauthorizedException();
    if (roles.includes('admin')) {
      console.log('admin');
      return true;
    }
    return false;
  }
}