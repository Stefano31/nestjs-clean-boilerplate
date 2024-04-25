import { z } from 'zod'

const dbSchema = z.object({
  DB_PORT: z.coerce.number()
})

export const dbRegister = {
  name: 'db' as const,
  handler: () => dbSchema.parse(process.env)
}
