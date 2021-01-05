import { Logger } from '@nestjs/common';
import {
  CLIENT_CONNECT,
  CLIENT_CONNECT_NAME,
} from './client-connect.constants';
import * as KeycloakConnect from 'keycloak-connect';
import { KEYCLOAK_INSTANCE } from './constants';

export const ClientConnectProvider = {
  provide: CLIENT_CONNECT,
  useFactory: async (keycloak: KeycloakConnect.Keycloak) => {
    const logger = new Logger(CLIENT_CONNECT_NAME);
    try {
      logger.log('初始化Keycloak middleware...');

      return await keycloak.middleware();
    } catch (err) {
      logger.error('初始化Keycloak middleware失败');
      throw err;
    }
  },
  inject: [KEYCLOAK_INSTANCE],
};
