import { Module } from '@nestjs/common';
import { SettingProvider } from './setting.provider';
import { SettingService } from './setting.service';

@Module({
  providers: [SettingService, SettingProvider],
  exports: [SettingProvider],
})
export class SettingModule {}
