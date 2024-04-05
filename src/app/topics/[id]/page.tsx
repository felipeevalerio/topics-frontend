import { Logo } from '@/app/components/Logo'
import { TopicCard } from '@/app/components/Topic/TopicCard'
import { Topic } from '@/domain/entities/Topic'
import { useFetch } from '@/hooks/useFetch'
import { redirect } from 'next/navigation'
import type { GetTopicResponse } from '@/domain/contracts/GetTopicContract'

interface TopicProps {
  params: {
    id: string
  }
}

const FIVE_MINUTES = 5 * 60

export default async function Topic({ params }: TopicProps) {
  const { GET } = useFetch()

  const response = await GET<GetTopicResponse>(
    `http://localhost:3000/api/topics/${params.id}`,
    {
      next: { revalidate: FIVE_MINUTES },
    },
  )

  if (!response.isSuccessful || !response.data) redirect(`/`)

  return (
    <>
      <header className="flex py-4 px-8">
        <Logo />
      </header>
      <main className="flex flex-col mx-8">
        <TopicCard data={response.data} />
      </main>
    </>
  )
}
