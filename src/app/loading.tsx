import { Spinner } from '@/app/components/Spinner'

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  )
}
