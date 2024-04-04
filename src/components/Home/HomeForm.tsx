'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createTopicSchema = z.object({
  name: z.string().min(3, 'Name is too short'),
})

type CreateTopicData = z.infer<typeof createTopicSchema>

export async function HomeForm() {
  const { register, handleSubmit } = useForm<CreateTopicData>({
    resolver: zodResolver(createTopicSchema),
  })

  async function createTopic(data: CreateTopicData) {
    await fetch('/api/topics', {
      body: JSON.stringify(data),
      method: 'POST',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(createTopic)}
      className="flex flex-col mt-4 gap-3 items-center"
    >
      <input
        className="bg-transparent border border-white-700 px-3 py-2 rounded-md text-white-700"
        type="text"
        placeholder="What is React?"
        {...register('name')}
      />
      <button
        type="submit"
        className="bg-orange-500 rounded-md p-1 w-32 hover:bg-orange-300 transition-colors"
      >
        Create topic
      </button>
    </form>
  )
}
