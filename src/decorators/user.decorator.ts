import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // const user = request.user;
    const user = {
      name: 'misha',
      age: 25
    };
    return user?.[data];
  },
);