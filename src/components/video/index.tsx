'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export const Video = () => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.fromTo(
        '.video-container',
        { scale: 0.4 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            pin: wrapper.current,
            end: () => `+=${window.innerWidth * 1.5}`,
            start: 'center center',
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <section className='relative mb-56' ref={wrapper}>
      <div ref={container} className='video-section'>
        <div className='video-container'>
          <video
            autoPlay
            loop
            preload='preload'
            muted
            className='video h-full w-full object-cover'
          >
            <source src='/KOdigital_Showreel.webm' type='video/webm' />
          </video>
        </div>
      </div>
    </section>
  )
}
