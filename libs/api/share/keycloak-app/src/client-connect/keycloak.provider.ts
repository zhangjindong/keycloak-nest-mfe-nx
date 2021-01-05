import { EXPRESS_STORE } from '@keycloak-nest-mfe-nx/api/share/share-core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Keycloak from 'keycloak-connect';
import { KEYCLOAK_INSTANCE, KEYCLOAK_INSTANCE_NAME } from './constants';

export const KeycloakProvider = {
  provide: KEYCLOAK_INSTANCE,
  useFactory: async (config: ConfigService, store: any) => {
    const logger = new Logger(KEYCLOAK_INSTANCE_NAME);
    try {
      logger.log('初始化Keycloak客户端');
      let keycloakConfig = config.get('keycloak');
      let keycloakConConfig: Keycloak.KeycloakConfig = {
        'confidential-port': 0,
        'auth-server-url': keycloakConfig.url,
        resource: keycloakConfig.api.client,
        'ssl-required': 'external',
        realm: keycloakConfig.realmName,
        "bearer-only":true,
      };

      keycloakConfig.api.bearerOnly &&
        (keycloakConConfig['bearer-only'] = keycloakConfig.api.bearerOnly);
      keycloakConfig.api.secret &&
        (keycloakConConfig['credentials'] = {
          secret: keycloakConfig.api.secret,
        });
      if (!!store) {
        const keycloak = await new Keycloak(
          { store: store },
          keycloakConConfig
        );
        keycloak.authenticated = (request: Express.Request) => {
          logger.log(request['kauth'].grant);
        };
        logger.log('初始化 Keycloak链接成功');
        return keycloak;
      } else {
        logger.error('初始化 Keycloak链接失败，Session store未获取到');
        return () => {};
      }
    } catch (err) {
      logger.error('初始化Keycloak客户端失败');
      throw err;
    }
  },
  inject: [ConfigService, EXPRESS_STORE],
};
