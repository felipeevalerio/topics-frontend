import { ReactNode } from 'react'
import Image from 'next/image'
import GitHubLogo from '@/assets/github-logo.svg'

interface AvatarProps {
  image: string | null | undefined
  children: ReactNode
  variant?: 'sm' | 'default'
}

const SMALL_SIZE = 24
const DEFAULT_SIZE = 48

export function Avatar({ image, children, variant = 'default' }: AvatarProps) {
  function getSizeForAvatar() {
    switch (variant) {
      case 'sm':
        return SMALL_SIZE
      default:
        return DEFAULT_SIZE
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <Image
        src={image ?? GitHubLogo}
        alt=""
        width={getSizeForAvatar()}
        height={getSizeForAvatar()}
        className="rounded-full"
      />
      {children}
    </div>
  )
}
