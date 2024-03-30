import { HomeActions } from '@/components/Home/HomeActions'
import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <main className="flex">
      <aside className="flex-1" />
      <section className="flex flex-col bg-gray-500 h-screen justify-center items-center w-2/5 ">
        <Logo />
        <p>Get the best answers for your topics!</p>
        <HomeActions />
      </section>
    </main>
  )
}
