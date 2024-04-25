import { Controller, Get } from '@nestjs/common'
import { BarService } from './Bar.service'

@Controller()
export class BarController {
  constructor (private readonly barService: BarService) {}

  @Get()
  getCode (): string {
    return this.barService.getCode()
  }
}
