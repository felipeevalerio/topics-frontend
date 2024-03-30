'use client'

import Image from 'next/image'
import GitHubLogo from '@/assets/github-logo.svg'
import { signIn } from 'next-auth/react'

export function SignInWithGithub() {
  return (
    <button
      className="flex items-center gap-4 bg-orange h-10 w-10"
      onClick={() => signIn('github')}
    >
      <Image src={GitHubLogo} alt={''} height={16} width={16} />
      Sign in with GitHub
    </button>
  )
}
