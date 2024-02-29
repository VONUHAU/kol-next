import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
import { Branding } from '@/components/brand'
import { Slider } from '@/components/slider'
import { Contact } from '@/components/contact'
import { DrawClient } from '@/components/DrawClient'
import SplitStringToSpans from '../components/splitWords/index'

export default function Home() {
  return (
    <main className='relative  '>
      <Hero />
      <Video />
      <SplitStringToSpans />
      <DrawClient />
      <Branding />
      <Slider />
      <Contact />
    </main>
  )
}
