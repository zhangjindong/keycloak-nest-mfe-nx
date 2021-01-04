import { Test, TestingModule } from '@nestjs/testing';
import { KeycloakAdminService } from './keycloak-admin.service';

describe('KeycloakAdminService', () => {
  let service: KeycloakAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeycloakAdminService],
    }).compile();

    service = module.get<KeycloakAdminService>(KeycloakAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
