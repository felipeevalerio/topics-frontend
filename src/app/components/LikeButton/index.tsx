'use client'

import { useState } from 'react'
import { LikeIcon } from './LikeIcon'

interface LikeButtonProps {
  initialLikeCount: number
  onLike: () => Promise<void>
}

export function LikeButton({ initialLikeCount, onLike }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikeCount)
  const alreadyLikedByUser = likes !== initialLikeCount

  async function handleLike() {
    if (alreadyLikedByUser) {
      setLikes((state) => state - 1)
    } else {
      setLikes((state) => state + 1)
    }

    await onLike()
  }

  return (
    <button onClick={handleLike} className="flex flex-col gap-1 items-center">
      <LikeIcon isLiked={alreadyLikedByUser} />
      <span>{likes}</span>
    </button>
  )
}
