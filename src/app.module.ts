import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { MessageModule } from './infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessageModule],
})
export class AppModule {}
