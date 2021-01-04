import { Module } from '@nestjs/common';
import { KeycloakManagerService } from '../keycloak-manager.service';

@Module({
  providers: [KeycloakManagerService],
  exports: [KeycloakManagerService],
})
export class KeycloakManagerModule {}
