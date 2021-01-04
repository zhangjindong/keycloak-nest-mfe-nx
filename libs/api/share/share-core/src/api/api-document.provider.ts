import { INestApplication, Logger } from '@nestjs/common';
import { ApiDocumentService } from './api-document';
import { API_DOCUMENT, API_DOCUMENT_NAME } from './api-document.constants';

export const ApiDocumentProvider = {
  provide: API_DOCUMENT,
  useFactory: () => {
    const logger = new Logger(API_DOCUMENT_NAME);
    try {
      logger.log('初始化 ApiDocument...');
      return (app: INestApplication) => new ApiDocumentService(app);
    } catch (err) {
      logger.error('初始化 Api Document 出错');
      throw err;
    }
  },
  // inject: [],
};
