import { Module } from '@nestjs/common';
import { KeycloakRegistrationController } from './keycloak-registration.controller';
import { KeycloakRegistrationService } from './keycloak-registration.service';

@Module({
  controllers: [KeycloakRegistrationController],
  providers: [KeycloakRegistrationService]
})
export class KeycloakRegistrationModule {}
