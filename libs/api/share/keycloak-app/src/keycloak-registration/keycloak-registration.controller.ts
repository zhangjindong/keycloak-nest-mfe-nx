import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { KeycloakRegistrationService } from './keycloak-registration.service';
@ApiTags('keycloak-registration')
@Controller('keycloak-registration')
export class KeycloakRegistrationController {
  constructor(
    private config: ConfigService,
    private keycloakRegistration: KeycloakRegistrationService,
  ) {}
  @Get()
  clientRegistration(
    @Query('accessToken') accessToken: string,
  ): Observable<any> {
    const keycloakConfig = this.config.get('keycloak');
    return combineLatest(
      this.keycloakRegistration
        .createClient(
          {
            accessToken,
            endpoint: `${this.config.get(
              'keycloak.url',
            )}/realms/${this.config.get(
              'keycloak.realmName',
            )}/clients-registrations`,
          },
          {
            clientId: this.config.get('keycloak.api.client'),
            serviceAccountsEnabled: true,
            adminUrl: keycloakConfig.adminUrl,
            bearerOnly: true,
            secret: keycloakConfig.api.secret,
            name: keycloakConfig.api.name,
            description: keycloakConfig.api.description,
            // baseUrl: keycloakConfig.adminUrl,
            // rootUrl: keycloakConfig.adminUrl,
            // redirectUris: [`${keycloakConfig.adminUrl}/*`],
            // webOrigins: [keycloakConfig.adminUrl, '*'],
          },
        )
        .pipe(
          tap(res => {
            Logger.error(res);
          }),
          catchError(err => {
            Logger.log(err);
            return of({ code: 500, err });
          }),
        ),
      this.keycloakRegistration.createClient(
        {
          accessToken,
          endpoint: `${this.config.get(
            'keycloak.url',
          )}/realms/${this.config.get(
            'keycloak.realmName',
          )}/clients-registrations`,
        },
        {
          clientId: this.config.get('keycloak.web.client'),
          serviceAccountsEnabled: true,
          adminUrl: keycloakConfig.adminUrl,
          name: keycloakConfig.web.name,
          description: keycloakConfig.web.description,
          publicClient: true,
          baseUrl: keycloakConfig.adminUrl,
          rootUrl: keycloakConfig.adminUrl,
          redirectUris: [`${keycloakConfig.adminUrl}/*`],
          webOrigins: [keycloakConfig.adminUrl, '*'],
          directAccessGrantsEnabled: true,
        },
      ),
    );
  }
}
