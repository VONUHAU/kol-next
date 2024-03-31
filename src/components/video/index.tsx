'use client'
import React, { useRef, useState, useEffect } from 'react'
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
export const Video = () => {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState<number>()
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial width
    handleResize()

    // Event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Define your video URLs based on the window width
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
    <section className='relative mb-56 mt-4' ref={wrapper}>
      <div ref={container} className='video-section'>
        <div className='video-container'>
          {windowWidth && windowWidth < 450 ? <MobileVideo /> : <DestopVideo />}
        </div>
      </div>
    </section>
  )
}
