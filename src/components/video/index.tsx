'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export const Video = () => {
  const container = useRef<HTMLDivElement>(null)
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
            pin: true,
            pinSpacing: false,
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <section className='relative h-[220vh]'>
      <div ref={container} className='video-section -mx-8 w-screen'>
        <div className='video-container h-screen w-screen'>
          <video
            autoPlay
            loop
            preload='preload'
            muted
            className='video h-full w-full object-cover'
          >
            <source
              src='https://a.storyblok.com/f/150329/x/28eda8d691/smv_intro_cc35.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </section>
  )
}
