import { Module } from '@nestjs/common';
import { KeycloakAdminService } from './keycloak-admin.service';
import KcAdminClient from 'keycloak-admin';
import { ClientConnectModule } from '@app/keycloak-app';
@Module({
  providers: [KeycloakAdminService, KcAdminClient],
  controllers: [],
  exports: [KeycloakAdminService],
  imports: [ClientConnectModule],
})
export class KeycloakAdminModule {}
