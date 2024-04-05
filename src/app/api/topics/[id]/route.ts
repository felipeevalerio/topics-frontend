import { HTTP_STATUS_CODES } from '@/domain/consts/HttpStatusCode'
import { Topic } from '@/domain/entities/Topic'
import { AuthRepository } from '@/repositories/AuthRepository'
import { NextRequest, NextResponse } from 'next/server'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

interface GETProps {
  params: {
    id: string
  }
}

export async function GET(_: NextRequest, { params }: GETProps) {
  try {
    if (!params.id)
      return NextResponse.json('Topic ID is required', { status: 400 })

    const topic = (await fetch(
      `http://localhost:5055/api/v1/topics?topicId=${params.id}`,
      {
        method: 'GET',
      },
    ).then((res) => res.json())) as Topic

    const user = await AuthRepository.GetUserById(topic.createdBy)
    const response = {
      topic,
      user,
    }
    console.log(response)

    return NextResponse.json(response, {
      status: HTTP_STATUS_CODES.OK,
    })
  } catch (err) {
    const error = err as Error
    return NextResponse.json(
      {
        isSuccessful: false,
        message: error.message,
      },
      {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      },
    )
  }
}
