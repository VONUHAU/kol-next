'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clients } from '@/components/clients'
const SplitStringToSpans = dynamic(() => import('../splitWords'), {
  ssr: false,
})
gsap.registerPlugin(ScrollTrigger)
export const Video = () => {
  const container = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.fromTo(
        '.video',
        { scale: 0.4 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            pin: '.video',
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <div>
      <div
        ref={container}
        className='video-section -mx-8 my-8 w-screen max-w-[100vw] sm:my-24'
      >
        <video autoPlay loop muted className='video w-screen'>
          <source
            src='https://a.storyblok.com/f/150329/x/28eda8d691/smv_intro_cc35.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <SplitStringToSpans />
      <Clients />
    </div>
  )
}
