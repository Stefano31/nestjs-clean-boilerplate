import { Injectable } from '@nestjs/common'

@Injectable()
export class BarService {
  getCode (): string {
    return 'Hello World!'
  }
}
