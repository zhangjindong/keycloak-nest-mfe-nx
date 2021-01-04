import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiDocumentProvider } from './api-document.provider';
import { ApiDocumentService } from './api-document.service';
@Module({
  imports: [],
  providers: [ApiDocumentService, ApiDocumentProvider],
  exports: [ApiDocumentService,ApiDocumentProvider],
})
export class ApiDocumentModule {
  constructor() {}
}
