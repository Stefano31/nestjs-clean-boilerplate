import { Test, TestingModule } from '@nestjs/testing'
import { BarController } from './Bar.controller'
import { BarService } from './Bar.service'

describe('BarController', () => {
  let barController: BarController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BarController],
      providers: [BarService]
    }).compile()

    barController = app.get<BarController>(BarController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(barController.getCode()).toBe('Hello World!')
    })
  })
})
