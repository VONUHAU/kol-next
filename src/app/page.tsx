'use client'
import { Suspense, useCallback, useEffect } from 'react'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
import { Branding } from '@/components/brand'
import { Slider } from '@/components/slider'
import { Contact } from '@/components/contact'
import { DrawClient } from '@/components/DrawClient'
import SplitStringToSpans from '../components/splitWords/index'

export default function Home() {
  // ensure scroll to top each time user reload window
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition()
    }
  }, [resetWindowScrollPosition])

  return (
    <main className='relative overflow-hidden'>
      <Suspense fallback={<>Loading...</>}>
        <Hero />
        <Video />
        <SplitStringToSpans />
        <DrawClient />
        <Branding />
        <Slider />
        <Contact />
      </Suspense>
    </main>
  )
}
