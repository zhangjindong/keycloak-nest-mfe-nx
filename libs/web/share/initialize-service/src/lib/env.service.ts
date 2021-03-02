import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class EnvService {
  constructor(private http: HttpClient) {}
  /**
   * 获取环境变量
   *
   * @returns {Observable<any>}
   * @memberof EnvService
   */
  getEnvs(env: string): Observable<any> {
    return of(
      {
        // 端口
        port: 8080,
        apiPath: 'apidoc',
        // keycloak
        keycloak: {
          onload: 'login-required', //'login-required','check-sso'
          url: 'http://localhost:8081/auth',
          realmName: 'cofco',
          adminUrl: 'http://portal.baoli.com:4200',
          api: {
            client: 'test_portal_node',
            name: '门户服务端',
            description: '门户服务端',
            secret: 'd94f33fb-7752-4d03-9b88-a6f1c0ed9d52',
            // bearerOnly:true
          },
          web: {
            client: 'test_portal_web',
            name: '门户客户端',
            description: '门户客户端',
          },
          admin: {
            clientId: 'admin-cli',
            username: 'cofco_admin', //'keycloak',
            password: '111111',
            grantType: 'password',
            clientSecret: '73e6416a-4baa-4391-9e0c-29f16256151a',
          },
        },
      }[env]
    );
    return this.http.get(`/api/env/${env}`);
  }
}
