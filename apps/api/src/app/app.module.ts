import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ScheduleModule } from "@nestjs/schedule";
import { CronModule } from './cron/cron.module';

@Module({
  imports: [ScheduleModule.forRoot(), CronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
