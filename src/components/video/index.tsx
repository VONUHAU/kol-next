'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MobileVideo = () => {
  return (
    <video
      autoPlay
      loop
      preload='preload'
      muted
      className='video h-full w-full object-cover'
    >
      <source src='/Showreel-February_2023.webm' type='video/webm' />
    </video>
  )
}
const DestopVideo = () => {
  return (
    <video
      autoPlay
      loop
      preload='preload'
      muted
      className='video h-full w-full object-cover'
    >
      <source src='/KOdigital_Showreel.webm' type='video/webm' />
    </video>
  )
}
export const Video = ({ windowWidth }: { windowWidth: number | undefined }) => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.fromTo(
        '.video-container',
        { scale: 0.4, borderRadius: 30 },
        {
          scale: 1,
          borderRadius: 0,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            pin: true,
            end: () => `+=${window.innerWidth * 1.5}`,
            start: 'center center',
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <section className='relative mt-4 sm:mb-56' ref={wrapper}>
      <div ref={container} className='video-section h-screen sm:h-auto'>
        <div className='video-container overflow-hidden'>
          {windowWidth && windowWidth < 450 ? <MobileVideo /> : <DestopVideo />}
        </div>
      </div>
    </section>
  )
}
