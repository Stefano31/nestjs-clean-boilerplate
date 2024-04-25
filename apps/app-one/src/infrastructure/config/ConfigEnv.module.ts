import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { load } from './Config.utils'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load,
      ignoreEnvFile: false
    })
  ]
})
export class ConfigEnvModule {}
