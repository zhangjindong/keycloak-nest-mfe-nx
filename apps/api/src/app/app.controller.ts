import { Controller, Get } from '@nestjs/common';

import { Message } from '@keycloak-nest-mfe-nx/api-interfaces';

import { AppService } from './app.service';
import { Public } from '@keycloak-nest-mfe-nx/api/share/keycloak-app';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Public()
  getData(): Message {
    return this.appService.getData();
  }
}
