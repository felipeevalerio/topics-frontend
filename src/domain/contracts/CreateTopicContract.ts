import { z } from 'zod'

export const createTopicSchema = z.object({
  name: z.string().min(3, 'Name is too short'),
  description: z
    .string()
    .min(10, 'Description is too short (Min 10 characters)')
    .max(500, 'Description is too long (Max 500 characters)'),
})

export type CreateTopicData = z.infer<typeof createTopicSchema>
