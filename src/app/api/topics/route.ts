import { createTopicSchema } from '@/domain/schemas/TopicSchema'
import { AuthUtils } from '@/utils/AuthUtils'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const requestBody = await AuthUtils.ValidateSchema(
      request,
      createTopicSchema,
    )

    const { name } = requestBody.data

    const userId = await AuthUtils.GetUserIdFromSession(request)

    const topic = {
      name,
      createdBy: userId.toString(),
    }

    const topicResponse = await fetch(`http://localhost:5055/api/v1/topics`, {
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const responseJSON = await topicResponse.json()

    return NextResponse.json(responseJSON, {
      status: topicResponse.status,
    })
  } catch (err) {
    const error = err as Error
    return NextResponse.json(error.message)
  }
}
