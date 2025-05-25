import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../_types/jwt.type';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request);
    return request.user;
  },
);
