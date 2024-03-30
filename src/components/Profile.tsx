import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import GitHubLogo from '@/assets/github-logo.svg'

export async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) return null

  const { name, image } = session.user

  return (
    <div className="flex gap-2 items-center">
      <Image
        src={image ?? GitHubLogo}
        alt=""
        width={48}
        height={48}
        className="rounded-full"
      />
      <p>
        Logged in as <strong>{name}</strong>
      </p>
    </div>
  )
}
