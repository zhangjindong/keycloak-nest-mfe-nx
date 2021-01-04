import { Test, TestingModule } from '@nestjs/testing';
import { KeycloakManagerService } from './keycloak-manager.service';

describe('KeycloakManagerService', () => {
  let service: KeycloakManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeycloakManagerService],
    }).compile();

    service = module.get<KeycloakManagerService>(KeycloakManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
