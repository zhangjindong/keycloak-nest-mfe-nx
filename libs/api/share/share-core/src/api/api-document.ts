// 内部系统对接 API
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Injectable } from '@nestjs/common';

// @Injectable()
export class ApiDocumentService {
  private readonly app: INestApplication;

  constructor(app: INestApplication) {
    this.app = app;
  }

  public build(config: {
    title;
    description;
    version;
    apiPath: 'apidoc';
    tag?: string;
  }) {
    const internalOptions = new DocumentBuilder()
      .setTitle(config.title)
      .setDescription(config.description)
      .setVersion(config.version)
      .addTag(config.tag)
      .build();
    const document = SwaggerModule.createDocument(this.app, internalOptions);
    SwaggerModule.setup(config.apiPath, this.app, document);
  }
}
