'use client'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
import { Branding } from '@/components/brand'
import { Slider } from '@/components/slider'
import { Contact } from '@/components/contact'
import { DrawClient } from '@/components/DrawClient'
import SplitStringToSpans from '../components/splitWords/index'
import { Footer } from '@/components/footer'
import { WeDrawProvider } from '@/contexts/weDrawContext'

export default function Home() {
  return (
    <main className='relative  '>
      <WeDrawProvider>
        <Hero />
        <Video />
        <SplitStringToSpans />
        <DrawClient />
        <Branding />
        <Slider />
        <Contact />
        <Footer />
      </WeDrawProvider>
    </main>
  )
}
