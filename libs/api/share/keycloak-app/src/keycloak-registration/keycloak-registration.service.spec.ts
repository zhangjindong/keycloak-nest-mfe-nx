import { Test, TestingModule } from '@nestjs/testing';
import { KeycloakRegistrationService } from './keycloak-registration.service';

describe('KeycloakRegistrationService', () => {
  let service: KeycloakRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeycloakRegistrationService],
    }).compile();

    service = module.get<KeycloakRegistrationService>(KeycloakRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
