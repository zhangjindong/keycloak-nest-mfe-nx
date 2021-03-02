/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { CLIENT_CONNECT } from '@mfe/api/share/keycloak-app';
import {
  API_DOCUMENT,
  EXPRESS_SESSION,
  SETTING,
} from '@mfe/api/share/share-core';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const api = app.get(API_DOCUMENT);
  api(app).build({
    title: 'Server 服务',
    description: '测试微服务框架',
    version: '0.0.1',
    tag: '测试服务',
    apiDocPath: 'apidoc',
  });
  const session = app.get(EXPRESS_SESSION);
  app.use(session);
  const keycloak = app.get(CLIENT_CONNECT);
  app.use(keycloak);
  const setting = app.get(SETTING);
  const port = setting(app);
  await app.listen(port, () => {
    Logger.log('http://localhost:' + port + '/', 'Listening at ');
  });
}
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }

bootstrap();
