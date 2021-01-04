import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiDocumentProvider } from '../api';
import shareConfig from '../config/share-config';
import { SessionModule } from '../session';
import { SettingModule } from '../setting';
@Module({
  imports: [SessionModule, SettingModule, ConfigModule.forFeature(shareConfig)],
  providers: [ApiDocumentProvider],
  exports: [ConfigModule, SessionModule],
})
export class ShareCoreModule {}
