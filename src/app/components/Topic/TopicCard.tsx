'use client'

import { useFetch } from '@/hooks/useFetch'
import { Avatar } from '../Avatar'
import { LikeButton } from '../LikeButton'
import { GetTopicResponse } from '@/domain/contracts/GetTopicContract'
import { SendLikeRequest } from '@/domain/contracts/SendLikeContract'

interface TopicCardProps {
  data: GetTopicResponse
}

export async function TopicCard({ data }: TopicCardProps) {
  const { POST } = useFetch()
  const { topic, user } = data

  async function handleLikeTopic() {
    const body: SendLikeRequest = {
      topicId: topic.id,
    }
    console.log(topic)
    const response = await POST<string>(
      `http://localhost:3000/api/topics/likes`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
    )

    console.log(response)
  }

  return (
    <article className="w-100 bg-gray-500 min-h-40 rounded-lg py-3 px-4 flex flex-col gap-6">
      <header className="flex flex-col gap-1 w-full">
        <h1 className="text-2xl font-bold capitalize">{topic.name}</h1>
        <span className="flex items-center gap-2 text-sm justify-end">
          Asked by
          <Avatar image={user.image} variant="sm">
            <strong className="text-sm">{user.name}</strong>
          </Avatar>
        </span>
      </header>
      <section className="flex items-center justify-between gap-2">
        <p>{topic.description}</p>
        <LikeButton
          initialLikeCount={topic.likeCount}
          onLike={handleLikeTopic}
        />
      </section>
    </article>
  )
}
