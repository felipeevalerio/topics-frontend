import { z } from 'zod'

const GUID_LENGTH = 36

export const sendLikeSchema = z.object({
  topicId: z.string().length(GUID_LENGTH),
})

export type SendLikeRequest = z.infer<typeof sendLikeSchema>
