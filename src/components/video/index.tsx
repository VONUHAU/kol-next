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
        '.youtube-container',
        { scale: 0.4 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            pin: wrapper.current,
            end: () => `+=${window.innerWidth * 2}`,
            start: 'center center',
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <section className='relative mb-56' ref={wrapper}>
      <div ref={container} className='video-section -mx-8 w-screen'>
        <div className='youtube-container w-screen'>
          {/* <iframe
            src='https://www.youtube-nocookie.com/embed/bmJuGXXSgfE?si=Zei9rHshR7ytnRP7&autoplay=1&mute=1&loop=1&color=white&controls=0&rel=0&playlist=bmJuGXXSgfE'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe> */}
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
