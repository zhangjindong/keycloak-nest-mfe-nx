import { ShareCoreModule } from '@keycloak-nest-mfe2/api/share/share-core'
import { Module } from '@nestjs/common';
import { ClientConnectProvider } from './client-connect.provider';
import { KeycloakProvider } from './keycloak.provider';

@Module({
  imports: [ShareCoreModule],
  controllers: [],
  providers: [KeycloakProvider, ClientConnectProvider],
  exports: [KeycloakProvider, ClientConnectProvider],
})
export class ClientConnectModule {
  constructor() {}
}
