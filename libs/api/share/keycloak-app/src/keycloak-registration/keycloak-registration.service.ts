import { Injectable } from '@nestjs/common';
import { Options } from './options.interface';
import { Observable, from, of } from 'rxjs';
import * as keycloakClientRegistration from 'keycloak-client-registration';
import { catchError } from 'rxjs/operators';
@Injectable()
export class KeycloakRegistrationService {
  /**
   * 查询客户端
   *
   * @param {Options} options
   * @returns {Observable<any>}
   * @memberof KeycloakRegistrationService
   */
  getClient(options: Options, clientId: string): Observable<any> {
    return from(keycloakClientRegistration.get(options, clientId)).pipe(
      catchError(error => {
        return of({ code: 500, error });
      }),
    );
  }
  /**
   * 创建客户端
   *
   * @param {Options} options
   * @param {ClientRepresentation} client
   * @returns {Observable<any>}
   * @memberof KeycloakRegistrationService
   */
  createClient(options: Options, client: any): Observable<any> {
    return from(keycloakClientRegistration.create(options, client));
  }
}
