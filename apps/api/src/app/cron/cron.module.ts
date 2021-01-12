import { HttpModule, Module } from "@nestjs/common";
import { CronService } from "./cron.services";

@Module({
  imports: [HttpModule],
  providers: [CronService],
})
export class CronModule {}
