import { HTTP_STATUS_CODES } from '@/domain/consts/HttpStatusCode'
import { sendLikeSchema } from '@/domain/contracts/SendLikeContract'
import { AuthUtils } from '@/utils/AuthUtils'
import { NextRequest, NextResponse } from 'next/server'

interface SendLikeBody {
  topicId: string
  likedBy: string
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await AuthUtils.ValidateSchema(request, sendLikeSchema)

    const { topicId } = requestBody.data

    const userId = await AuthUtils.GetUserIdFromSession(request)
    const like: SendLikeBody = {
      topicId,
      likedBy: userId.toString(),
    }

    const likeResponse = await fetch(`http://localhost:5055/api/v1/topics`, {
      body: JSON.stringify(like),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((res) => res.json())

    return NextResponse.json(likeResponse, {
      status: likeResponse.status,
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
