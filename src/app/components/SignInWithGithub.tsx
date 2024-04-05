'use client'

import Image from 'next/image'
import GitHubLogo from '@/assets/github-logo.svg'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Spinner } from './Spinner'

export function SignInWithGithub() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignInWithGithub() {
    setIsLoading(true)
    await signIn('github')
    setIsLoading(false)
  }

  return (
    <div className="flex gap-4 items-center">
      <button
        className="flex flex-1 items-center gap-4 mt-4 border border-white-500 p-2 rounded-md hover:bg-orange-300 transition-colors shadow-md disabled:opacity-70"
        onClick={handleSignInWithGithub}
        disabled={isLoading}
      >
        <Image src={GitHubLogo} alt={''} height={16} width={16} />
        Sign in with GitHub
      </button>
      {isLoading && <Spinner />}
    </div>
  )
}
