import { AuthRepository } from '@/repositories/AuthRepository'
import type { NextRequest } from 'next/server'
import { z } from 'zod'

async function ValidateSchema<T extends z.ZodRawShape>(
  request: NextRequest,
  schema: z.ZodObject<T>,
) {
  const data = await request.json()
  const dataParsed = schema.safeParse(data)
  if (!dataParsed.success) {
    throw new Error('Invalid data: ' + dataParsed.error.errors.join(', '))
  }

  return dataParsed
}

async function GetUserIdFromSession(request: NextRequest) {
  const token = request.cookies.get(`next-auth.session-token`)

  if (!token) throw new Error(`Invalid Token`)

  const { userId } = await AuthRepository.GetSessionByToken(token)
  return userId
}

export const AuthUtils = {
  ValidateSchema,
  GetUserIdFromSession,
}
