export class KeycloakUserDto {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  roles?: Array<string>;
  enabled?: boolean;

  code?: string;
  qiye?: string;
  attributes?: any;
  xieyi?: boolean;
  vertify?: string;
}
