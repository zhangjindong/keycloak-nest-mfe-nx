import { ShareCoreModule } from '@mfe/api/share/share-core';
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
