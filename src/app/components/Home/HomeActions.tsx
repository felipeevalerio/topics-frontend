import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { SignInWithGithub } from '../SignInWithGithub'
import { CreateTopicForm } from './CreateTopicForm'
import { Profile } from '../Profile'

export async function HomeActions() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return <SignInWithGithub />
  }

  return (
    <div className="flex flex-col gap-2 mt-6">
      <Profile />
      <CreateTopicForm />
    </div>
  )
}
