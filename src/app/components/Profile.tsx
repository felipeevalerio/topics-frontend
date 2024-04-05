import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { Avatar } from './Avatar'

export async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) return null

  const { name, image } = session.user

  return (
    <Avatar image={image}>
      <span>
        Logged in as <strong>{name}</strong>
      </span>
    </Avatar>
  )
}
