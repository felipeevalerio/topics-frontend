import { mongoClient } from '@/config/mongo'
import type { Session } from '@/domain/entities/Session'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

async function GetSessionByToken(token: RequestCookie) {
  return (await mongoClient
    .collection('sessions')
    .findOne({ sessionToken: token.value })) as Session
}

export const AuthRepository = { GetSessionByToken }
