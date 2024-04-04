import { ObjectId } from 'mongodb'

export interface Session {
  _id: ObjectId
  sessionToken: string
  userId: ObjectId
  expires: Date
}
