import { NestFactory } from '@nestjs/core'
import { AppModule } from './App.module'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IConfig } from './infrastructure/config/Config.utils'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'

async function bootstrap (): Promise<INestApplication> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  const configService = app.get(ConfigService<IConfig>)
  const { APP_PORT } = configService.getOrThrow('app', { infer: true })
  await app.listen(APP_PORT, '0.0.0.0')
  return app
}

bootstrap().then(async (app) => {
  console.log(`App-one on ${await app.getUrl()}`)
}).catch(() => {
  console.error('KO')
})
