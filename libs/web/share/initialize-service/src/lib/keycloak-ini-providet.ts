import { KeycloakService } from 'keycloak-angular';

import { EnvService } from './env.service';
import { APP_INITIALIZER } from '@angular/core';

export const KeycloakInitializerProvide = {
  provide: APP_INITIALIZER,
  useFactory: Initializer,
  multi: true,
  deps: [KeycloakService, EnvService],
};

function Initializer(
  keycloak: KeycloakService,
  envService: EnvService
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        const keycloakEnv: any = await envService
          .getEnvs('keycloak')
          .toPromise();

        const keycloakConfig = {
          url: keycloakEnv.url,
          clientId: keycloakEnv.web.client,
          realm: keycloakEnv.realmName,
        };
        console.log(keycloakConfig);
        await keycloak.init({
          config: keycloakConfig,
          initOptions: {
            // onLoad: 'login-required','check-sso'
            onLoad: keycloakEnv.web.onload || 'login-required',
            checkLoginIframe: true,
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html',
          },
          bearerExcludedUrls: ['/assets'],
        });
        resolve(null);
      } catch (error) {
        reject(error);
      }
    });
  };
}
