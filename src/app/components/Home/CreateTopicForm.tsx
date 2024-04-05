'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Button } from '../Button'
import {
  CreateTopicData,
  createTopicSchema,
} from '@/domain/contracts/CreateTopicContract'

export function CreateTopicForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTopicData>({
    resolver: zodResolver(createTopicSchema),
  })

  const formErrors = Object.values(errors)

  async function createTopic(data: CreateTopicData) {
    const topicId = await fetch('/api/topics', {
      body: JSON.stringify(data),
      method: 'POST',
    }).then((res) => res.json())

    if (!topicId) return

    router.push(`/topics/${topicId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(createTopic)}
      className="flex flex-col mt-4 gap-3 items-center w-full"
    >
      <div className="flex flex-col items-start w-full gap-1">
        <label htmlFor="name">Name:</label>
        <input
          className="bg-transparent border border-white-700 px-3 py-2 rounded-md text-white-700 w-full"
          type="text"
          placeholder="What is React?"
          {...register('name')}
        />
      </div>
      <div className="flex flex-col items-start w-full gap-1">
        <label htmlFor="description">Description:</label>
        <textarea
          className="bg-transparent border border-white-700 px-3 py-2 rounded-md text-white-700 resize-none w-full"
          placeholder="I am trying to understand React, can someone help me?"
          {...register('description')}
        />
      </div>

      {!!formErrors.length && (
        <ul className="flex flex-col gap-1">
          {formErrors.map((error) => (
            <li key={error.message} className="text-xs text-error">
              * {error.message}
            </li>
          ))}
        </ul>
      )}
      <Button type="submit">Create topic</Button>
    </form>
  )
}
