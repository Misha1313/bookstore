import { ExceptionFilter, Catch, ArgumentsHost, HttpException, ForbiddenException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        path: request.url,
      });
  }
}