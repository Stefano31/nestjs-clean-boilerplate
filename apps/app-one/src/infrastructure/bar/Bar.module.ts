import { Module } from '@nestjs/common'
import { BarController } from './Bar.controller'
import { BarService } from './Bar.service'

@Module({
  imports: [],
  controllers: [BarController],
  providers: [BarService]
})
export class BarModule {}
