import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
import { Clients } from '@/components/clients'
import { Draw } from '@/components/draw'
import { Branding } from '@/components/brand'
import { Slider } from '@/components/slider'
export default function Home() {
  return (
    <main className='relative top-16 mt-5 min-h-screen'>
      <Hero />
      <Video />
      <Clients />
      <Draw />
      <Branding />
      <Slider />
    </main>
  )
}
