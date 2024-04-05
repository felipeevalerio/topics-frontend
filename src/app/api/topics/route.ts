import { HTTP_STATUS_CODES } from '@/domain/consts/HttpStatusCode'
import { createTopicSchema } from '@/domain/contracts/CreateTopicContract'
import { AuthUtils } from '@/utils/AuthUtils'
import { NextRequest, NextResponse } from 'next/server'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export async function POST(request: NextRequest) {
  try {
    const requestBody = await AuthUtils.ValidateSchema(
      request,
      createTopicSchema,
    )

    const userId = await AuthUtils.GetUserIdFromSession(request)

    const topic = {
      ...requestBody.data,
      createdBy: userId.toString(),
    }

    const topicResponse = await fetch(`http://localhost:5055/api/v1/topics`, {
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((res) => res.json())

    return NextResponse.json(topicResponse, {
      status: topicResponse.status,
    })
  } catch (err) {
    const error = err as Error
    console.log(err)

    return NextResponse.json(error.message, {
      status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    })
  }
}
