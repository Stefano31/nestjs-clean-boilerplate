import { z } from 'zod'

const environmentSchema = z.union([
  z.literal('development'),
  z.literal('production'),
  z.literal('testing'),
  z.literal('staging'),
  z.literal('canary')
])

const appSchema = z.object({
  NODE_ENV: environmentSchema,
  APP_PORT: z.coerce.number()
})

export const appRegister = {
  name: 'app' as const,
  handler: () => appSchema.parse(process.env)
}
