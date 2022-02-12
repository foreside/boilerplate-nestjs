import { Test, TestingModule } from '@nestjs/testing';
import { PasswordArchiveController } from './password-archive.controller';

describe('PasswordArchiveController', () => {
  let controller: PasswordArchiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordArchiveController],
    }).compile();

    controller = module.get<PasswordArchiveController>(PasswordArchiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
