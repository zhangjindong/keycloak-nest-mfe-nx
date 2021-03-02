import { Module } from '@nestjs/common';
import { SessionProvider } from './session.provider';
import { StoreProvider } from './store.provider';

@Module({
  imports: [],
  providers: [StoreProvider, SessionProvider],
  exports: [StoreProvider, SessionProvider],
})
export class SessionModule {}
