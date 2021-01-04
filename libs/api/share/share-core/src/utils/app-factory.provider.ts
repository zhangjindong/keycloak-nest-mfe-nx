import { INestApplication, Logger } from '@nestjs/common';
import { APP_FACTORY, APP_FACTORY_NAME } from './app-factory.constants';
export const AppFactoryProvider = {
  provide: APP_FACTORY,
  useFactory: () => {
    const logger = new Logger(APP_FACTORY_NAME);
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
