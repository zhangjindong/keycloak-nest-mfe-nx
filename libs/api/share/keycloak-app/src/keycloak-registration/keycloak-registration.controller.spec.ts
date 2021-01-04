import { Test, TestingModule } from '@nestjs/testing';
import { KeycloakRegistrationController } from './keycloak-registration.controller';

describe('KeycloakRegistration Controller', () => {
  let controller: KeycloakRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeycloakRegistrationController],
    }).compile();

    controller = module.get<KeycloakRegistrationController>(KeycloakRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
