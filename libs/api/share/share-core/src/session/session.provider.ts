import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import expressSession from 'express-session';
import {
  EXPRESS_SESSION,
  EXPRESS_SESSION_NAME,
  EXPRESS_STORE,
} from './session.constants';

export const SessionProvider = {
  provide: EXPRESS_SESSION,
  useFactory: async (store: any, config: ConfigService) => {
    const logger = new Logger(EXPRESS_SESSION_NAME);
    try {
      logger.log('初始化 Session...');

      let eSession = expressSession({
        store,
        name: config.get('session.SESSION_NAME') || '',
        secret: config.get('session.SESSION_SECRET') || 'keycloak',
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: config.get('session.isProduction') || false,
          maxAge: config.get('session.SESSION_COOKIE_MAX_AGE') || 2592000,
        },
      });
      return eSession;
    } catch (err) {
      logger.error('初始化  Express Session 出错');
      throw err;
    }
  },
  inject: [EXPRESS_STORE, ConfigService],
};
