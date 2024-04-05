import { mongoClient } from '@/config/mongo'
import type { Session } from '@/domain/entities/Session'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import type { User } from '@/domain/entities/User'
import { ObjectId } from 'mongodb'

async function GetSessionByToken(token: RequestCookie) {
  return (await mongoClient
    .collection('sessions')
    .findOne({ sessionToken: token.value })) as Session
}

async function GetUserById(userId: string) {
  return (await mongoClient
    .collection('users')
    .findOne({ _id: new ObjectId(userId) })) as User
}

export const AuthRepository = { GetSessionByToken, GetUserById }
