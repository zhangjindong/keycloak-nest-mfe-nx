import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import * as KeycloakConnect from 'keycloak-connect';
import { KEYCLOAK_INSTANCE } from '../constants';
import { Reflector } from '@nestjs/core';
import { META_UNPROTECTED } from '../decorators/unprotected.decorator';

/**
 * An authentication guard. Will return a 401 unauthorized when it is unable to
 * verify the JWT token or Bearer header is missing.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(KEYCLOAK_INSTANCE)
    private keycloak: KeycloakConnect.Keycloak,
    private readonly reflector: Reflector,
  ) {
    Logger.log('')
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isUnprotected = this.reflector.get<boolean>(
      META_UNPROTECTED,
      context.getHandler(),
    );

    // If unprotected is set skip Keycloak authentication
    if (isUnprotected) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const jwt = this.extractJwt(request.headers);

    try {
      const result = await this.keycloak.grantManager.validateAccessToken(jwt);

      if (typeof result === 'string') {
        // Attach user info object
        request.user = await this.keycloak.grantManager.userInfo(jwt);
        // Attach raw access token JWT extracted from bearer/cookie
        request.accessTokenJWT = jwt;
        return true;
      }
    } catch (ex) {
      console.error(`validateAccessToken Error: `, ex);
    }

    throw new UnauthorizedException();
  }

  extractJwt(headers: { [key: string]: string }) {
    if (headers && !headers.authorization) {
      throw new UnauthorizedException();
    }

    const auth = headers.authorization.split(' ');

    // We only allow bearer
    if (auth[0].toLowerCase() !== 'bearer') {
      throw new UnauthorizedException();
    }

    return auth[1];
  }
}
