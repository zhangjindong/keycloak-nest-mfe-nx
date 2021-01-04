import { Logger } from '@nestjs/common';
import Store from 'connect-redis';
import expressSession from 'express-session';
import Redis from 'ioredis';
import { EXPRESS_STORE, EXPRESS_STORE_NAME } from './session.constants';

export const StoreProvider = {
  provide: EXPRESS_STORE,
  useFactory: async () => {
    const logger = new Logger(EXPRESS_STORE_NAME);
    try {
      const redis = new Redis();
      const RedisStore = await Store(expressSession);
      const store = await new RedisStore({
        client: redis as any,
      });
      logger.log('初始化 RedisStore...');
      return store;
    } catch (err) {
      logger.error('初始化  RedisStore 出错');
      throw err;
    }
  },
};
