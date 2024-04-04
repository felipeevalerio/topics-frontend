import { z } from 'zod'

export const createTopicSchema = z.object({
  name: z.string().min(3, 'Name is too short'),
})
