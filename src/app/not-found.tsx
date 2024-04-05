import Link from 'next/link'
import { Button } from './components/Button'
import { Logo } from './components/Logo'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Logo />
      <h1 className="text-3xl font-bold">Page not Found</h1>
      <Link href="/">
        <Button type="button">Back to Home</Button>
      </Link>
    </div>
  )
}
