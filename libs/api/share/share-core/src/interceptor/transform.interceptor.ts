import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '../utils/log4js';

/**
 * 拦截器，拦截出参，实现日志
 *
 * @export
 * @class TransformInterceptor
 * @implements {NestInterceptor}
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    return next.handle().pipe(
      map(data => {
        if (!!data) {
          const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TransformInterceptor
    Request original url: ${req.originalUrl}
    Method: ${req.method}
    IP: ${req.ip}
    User: ${JSON.stringify(req.user)}
    Response data:\n ${
      !!data.data ? JSON.stringify(data.data) : JSON.stringify(data)
    }
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
          Logger.info(logFormat);
          Logger.access(logFormat);
        }
        return data;
      }),
    );
  }
}
