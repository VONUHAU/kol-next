'use client'
import { Suspense, useCallback, useEffect } from 'react'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
import { Branding } from '@/components/brand'
import { Slider } from '@/components/slider'
import { Contact } from '@/components/contact'
import { DrawClient } from '@/components/DrawClient'
import SplitStringToSpans from '../components/splitWords/index'
import { useLoader } from '@/hook/useLoader'
export default function Home() {
  // ensure scroll to top each time user reload window
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])
  const { windowWidth, isFontLoading } = useLoader()
  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition()
    }
  }, [resetWindowScrollPosition])

  return (
    <main className='relative overflow-hidden'>
      {isFontLoading && !windowWidth ? (
        <div className='fixed left-0 top-0 z-[9999] flex h-full w-full flex-col items-center justify-center bg-primary'>
          <div className='lds-ellipsis'>
            <div style={{ background: 'var(--accent)' }}></div>
            <div style={{ background: 'var(--accent)' }}></div>
            <div style={{ background: 'var(--accent)' }}></div>
            <div style={{ background: 'var(--accent)' }}></div>
          </div>
        </div>
      ) : null}
      <Suspense>
        <Hero />
        <Video windowWidth={windowWidth} />
        <SplitStringToSpans windowWidth={windowWidth} />
        <DrawClient />
        <Branding />
        <Slider />
        <Contact />
      </Suspense>
    </main>
  )
}
