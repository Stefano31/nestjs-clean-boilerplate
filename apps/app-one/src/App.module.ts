import { BarModule } from 'apps/app-one/src/infrastructure/bar/Bar.module'
import { HealthModule } from '@lib/health'
import { Module } from '@nestjs/common'
import { ConfigEnvModule } from './infrastructure/config/ConfigEnv.module'

@Module({
  imports: [ConfigEnvModule, BarModule, HealthModule],
  controllers: [],
  providers: []
})
export class AppModule { }
