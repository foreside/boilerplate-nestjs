import { Module } from '@nestjs/common';
import { PasswordArchiveController } from './password-archive.controller';
import { PasswordArchiveService } from './password-archive.service';

@Module({
  controllers: [PasswordArchiveController],
  providers: [PasswordArchiveService]
})
export class PasswordArchiveModule {}
