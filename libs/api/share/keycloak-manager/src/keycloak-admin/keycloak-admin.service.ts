import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import KcAdminClient from 'keycloak-admin';
import ClientRepresentation from 'keycloak-admin/lib/defs/clientRepresentation';
import GroupRepresentation from 'keycloak-admin/lib/defs/groupRepresentation';
import RoleRepresentation, {
  RoleMappingPayload,
} from 'keycloak-admin/lib/defs/roleRepresentation';
import UserRepresentation from 'keycloak-admin/lib/defs/userRepresentation';
// import { Issuer } from 'openid-client';
import { from, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  map,
  mapTo,
  mergeMap,
  tap,
  scan,
  last,
} from 'rxjs/operators';
import { KeycloakUserDto } from './model/keycloak-user.dto';

@Injectable()
export class KeycloakAdminService {
  public kcAdminClient: KcAdminClient;
  private refreshTokenIntervalId;
  constructor(private configService: ConfigService) {
    // this.connectKeycloakServer();
  }
  /*  connectKeycloakServer() {
    try {
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
      const keycloakConfig = this.configService.get('keycloak');
      const kcAdminClient = new KcAdminClient({
        baseUrl: keycloakConfig.url,
        realmName: keycloakConfig.realmName,
      });
      Logger.log('链接keycloak ');
      kcAdminClient
        .auth(keycloakConfig.admin)
        .then(() => {
          Logger.log('链接keycloak 成功');
          kcAdminClient.setConfig({ realmName: keycloakConfig.realmName });
          this.kcAdminClient = kcAdminClient;
          return this.refreshToken();
        })
        .catch(error => {
          Logger.log('', '链接keycloak错误');

          // this.connectKeycloakServer();
        });
    } catch (error) {
      Logger.log('', '链接keycloak错222误');
    }
  }
  async refreshToken() {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const keycloakConfig = this.configService.get('keycloak');

    const keycloakIssuer = await Issuer.discover(
      `${keycloakConfig.url}/realms/${keycloakConfig.realmName}`,
    );

    const client = new keycloakIssuer.Client({
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: 'admin-cli', // Same as `clientId` passed to client.auth()
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_secret: keycloakConfig.admin.clientSecret,
    });

    // Use the grant type 'password'
    let tokenSet = await client.grant({
      // eslint-disable-next-line @typescript-eslint/camelcase
      grant_type: 'password',
      username: keycloakConfig.admin.username,
      password: keycloakConfig.admin.password,
    });

    // Periodically using refresh_token grant flow to get new access token here
    this.refreshTokenIntervalId = setInterval(async () => {
      try {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
        const refreshToken = tokenSet.refresh_token;
        tokenSet = await client.refresh(refreshToken);
        // Logger.log('refresh_token', refreshToken, tokenSet.access_token);
        Logger.log(
          tokenSet.refresh_expires_in,
          '刷新管理员token refresh_expires_in:',
        );
        this.kcAdminClient.setAccessToken(tokenSet.access_token);
      } catch (error) {
        Logger.log(error, '刷新管理员token 异常');
        clearInterval(this.refreshTokenIntervalId);
        Logger.log('', '重新登录keycloak admin-cli');
        this.connectKeycloakServer();
      }
    }, 58 * 1000); // 58 seconds
  } */
  /**
   * keycloak-admin 注册用户
   *
   * @param {KeycloakUserDto} user
   * @returns {Observable<any>}
   * @memberof KeycloakAdminService
   */
  registerUser(user: KeycloakUserDto): Observable<any> {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    let userid: string, groupId: string, clientId: string;
    const clientRoles: Array<RoleMappingPayload> = [];
    const { externalId, password } = user.attributes;
    const credential = {
      temporary: false,
      type: 'password',
      value: password[0],
    };

    Logger.log(user);
    delete user.attributes.password;
    delete user.attributes.reppassword;
    const userObj = {
      attributes: user.attributes,
      email: user.email,
      enabled: user.enabled,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    };
    Logger.log(userObj);

    const adduser$ = from(
      this.kcAdminClient.users.find({
        username: userObj.username,
      })
    ).pipe(
      tap(() => Logger.log('查询用户名是否存在')),
      mergeMap((users: UserRepresentation[]) => {
        return users.length > 0
          ? throwError('用户名已存在')
          : this.kcAdminClient.users.find({
              email: userObj.email,
            });
      }),

      tap(() => Logger.log('查询Email是否存在')),
      mergeMap((users: UserRepresentation[]) => {
        return users.length > 0
          ? throwError('Email已存在')
          : this.kcAdminClient.groups.find({ search: externalId });
      }),
      mergeMap((groups) => {
        if (groups && groups.length > 0 && groups[0].id) {
          groupId = groups[0].id;
          return this.kcAdminClient.users.create(userObj);
        } else {
          return throwError('未找到该组：' + externalId);
        }
      }),
      tap((value) => Logger.log(value, '查询组')),

      tap((id) => {
        Logger.log(id, '已创建用户ID');
      }),
      mergeMap((id) => {
        if (id && id.id !== '') {
          userid = id.id;
          return this.kcAdminClient.users.resetPassword({
            id: userid,
            credential: credential,
          });
        } else {
          return throwError('Keycloak用户创建失败');
        }
      }),
      mergeMap(() =>
        this.kcAdminClient.users.addToGroup({ id: userid, groupId })
      ),
      tap(() => Logger.log('添加到组'))
    );
    const userroles: any = user.roles;
    const customerroles: Record<
      string,
      Record<string, Array<string>>
    > = this.configService.get('customerroles');
    const clients: Array<string> = Object.keys(customerroles);
    // ---userid-----------------
    // ---{A client,customerroles}----------------Aclientid----------Aclient rolelist-----Aclient filter roles----------A{userid,clientid,roles}
    // ---{B client,customerroles}----------------Bclientid----------Bclient rolelist-----Bclient filter roles----------B{userid,clientid,roles}
    const clientid = from(clients).pipe(
      mergeMap((client) =>
        this.kcAdminClient.clients.find({
          clientId: client,
        })
      ),
      mergeMap((clients) => of(...clients)),
      map((client) => ({ id: client.id, clientId: client.clientId }))
    );
    const rolelist = clientid.pipe(
      mergeMap((client) =>
        from(
          this.kcAdminClient.clients.listRoles({
            id: client.id,
          })
        ).pipe(
          map((rolelist) => {
            let userrole = userroles.reduce(
              (pre, cur, i) => [...pre, ...customerroles[client.clientId][cur]],
              []
            );
            userrole = Array.from(new Set(userrole));
            return rolelist.filter((role, i, list) => {
              return userrole.includes(role.name);
            });
          }),
          map((rolelist) => ({
            uuid: client.id,
            clientId: client.clientId,
            roles: rolelist,
          }))
        )
      ),
      scan((acc, cur, i) => [cur, ...acc], []),
      last(),
      tap((v) => Logger.log(v, 'roleList = '))
    );
    // const filterRoles = of(rolelist).pipe(
    // map(rolelist=>rolelist.filter((role,i,list)=>customerroles[clientid].includes(role.name)))
    // scan((acc, cur, i) => [cur, ...acc], []),)
    return adduser$.pipe(
      mergeMap(() => rolelist),
      mergeMap((roleObjs) =>
        from(roleObjs).pipe(
          mergeMap((roleObj) =>
            this.kcAdminClient.users.addClientRoleMappings({
              id: userid,
              clientUniqueId: roleObj.uuid,
              roles: roleObj.roles,
            })
          )
        )
      ),
      // tap(result => Logger.log(result, '添加到客户端角色,结果：')),
      mergeMap(() => of({ code: 200, data: '注册成功' })),
      catchError((error) => {
        return of({ code: 500, error });
      })
    );
  }
  /**
   *检查用户名
   *
   * @param {string} username
   * @returns {Observable<any>}
   * @memberof KeycloakAdminService
   */
  findUserByUserName(username: string, email: string): Observable<any> {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    let user = {};
    if (!!username) {
      user = { ...user, username };
    }
    if (!!email) {
      user = { ...user, email };
    }
    return from(this.kcAdminClient.users.find(user)).pipe(
      tap((result) => Logger.log(result, '检查用户'))
    );
  }
}
