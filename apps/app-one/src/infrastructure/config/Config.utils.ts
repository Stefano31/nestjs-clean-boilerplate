import { registerAs } from '@nestjs/config'
import { appRegister } from './App.config'
import { dbRegister } from './Database.config'

const registers = [appRegister, dbRegister]

export const load = registers.map(register =>
  registerAs(register.name, register.handler))

export interface IConfig { [appRegister.name]: ReturnType<typeof appRegister.handler>, [dbRegister.name]: ReturnType<typeof dbRegister.handler> }
