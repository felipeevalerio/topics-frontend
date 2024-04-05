import { Topic } from '../entities/Topic'
import { User } from '../entities/User'

export interface GetTopicResponse {
  topic: Topic
  user: User
}
