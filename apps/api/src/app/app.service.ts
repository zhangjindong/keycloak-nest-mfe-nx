import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): any {
    return { message: 'Welcome to api!' };
  }
}
