import { Test, TestingModule } from '@nestjs/testing';
import { PasswordArchiveService } from './password-archive.service';

describe('PasswordArchiveService', () => {
  let service: PasswordArchiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordArchiveService],
    }).compile();

    service = module.get<PasswordArchiveService>(PasswordArchiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
