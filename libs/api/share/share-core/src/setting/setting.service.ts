import {
  INestApplication,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { AllExceptionsFilter } from '../filter/any-exception.filter';
import { HttpExceptionFilter } from '../filter/http-exception.filter';
import { TransformInterceptor } from '../interceptor/transform.interceptor';
import { logger } from '../middleware/logger.middleware';

@Injectable({})
export class SettingService implements OnApplicationBootstrap {
  private app: INestApplication;
  private config: ConfigService;
  constructor(private readonly moduleRef: ModuleRef) {}
  init(app: INestApplication): number {
    this.app = app;
    this.config = this.moduleRef.get(ConfigService, { strict: false });
    this.app.setGlobalPrefix(this.config.get('apiPath'));

    // 监听所有的请求路由，并打印日志
    this.app.use(logger);

    // 这样每个通过class-validator装饰过的类属性都会得到校验。 @IsString() @IsInt()等
    this.app.useGlobalPipes(new ValidationPipe());

    // 使用拦截器打印出参
    this.app.useGlobalInterceptors(new TransformInterceptor());

    //捕获所有异常，http异常必须放到下面
    this.app.useGlobalFilters(new AllExceptionsFilter());

    // 过滤处理 HTTP 异常
    this.app.useGlobalFilters(new HttpExceptionFilter());
    return Number(this.config.get('port') || 3000);
  }

  async onApplicationBootstrap() {
    // await this.app.listen(this.config.get('port'));
  }
}
