// 内部系统对接 API
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Injectable, Logger } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';

@Injectable()
export class ApiDocumentService {
  public build(
    app: INestApplication,
    config: {
      title;
      description;
      version;
      apiPath: 'apidoc';
      tag?: string;
    },
  ) {
    const internalOptions = new DocumentBuilder()
      .setTitle(config.title)
      .setDescription(config.description)
      .setVersion(config.version)
      .addTag(config.tag)
      .build();
    const document = SwaggerModule.createDocument(app, internalOptions);
    SwaggerModule.setup(config.apiPath, app, document);
  }
}
