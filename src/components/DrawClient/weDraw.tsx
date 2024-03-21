/* eslint-disable react/display-name */
'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import webCard from '../../../public/assets/images/webcard01.jpg'
import webCard2 from '../../../public/assets/images/webcard02.jpg'
import webCard3 from '../../../public/assets/images/webcard03.jpg'
import webCard4 from '../../../public/assets/images/webcard04.jpg'
import webCard5 from '../../../public/assets/images/webcard05.jpg'
import webCard6 from '../../../public/assets/images/webcard06.jpg'
import webCard7 from '../../../public/assets/images/webcard07.jpg'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

const webCards = [
  webCard6,
  webCard7,
  webCard,
  webCard2,
  webCard3,
  webCard4,
  webCard5,
]

gsap.registerPlugin(ScrollTrigger)

export const WeDraw = () => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  const rotationTL = useRef<GSAPTimeline>()
  useGSAP(
    () => {
      rotationTL.current = gsap.timeline({
        paused: true,
      })
      rotationTL.current
        .from('.we-draw-image', {
          opacity: 0,
        })
        .to('.we-draw-image', {
          opacity: 1,
          x: 'random(-10,10)',
          stagger: 0.04,
          ease: 'power3.inOut',
        })
        .to('.we-draw-image', {
          x: 'none',
          stagger: 0.02,
          transformOrigin: 'center center',
          rotation: (index) => index * 5,
          onComplete: () => {
            document.body.style.overflowY = 'auto'
          },
        })

      tl.current = gsap.timeline({
        paused: true,
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          pin: true,
          markers: true,
          start: 'center center',
          end: () => `+=${window.innerHeight * 1.5}`,
          onLeaveBack: () => {
            gsap.set('.we-draw-image', {
              rotate: 'none',
              xPercent: 'none',
              yPercent: 'none',
            })
          },
        },
        ease: 'power3.inOut',
      })
      tl.current
        .to('.we-draw', {
          opacity: 0,
          duration: 0.1,
        })
        .to('.we-draw', {
          opacity: 1,
          duration: 0.03,
          onComplete: () => {
            document.body.style.overflow = 'hidden'
            rotationTL.current?.restart()
          },
        })

        .to('.we-draw-individual', {
          yPercent: 'random(-30, -100)',
          stagger: {
            amount: 0.2,
            from: 'center',
          },
        })
        .to(
          '.we-draw-image',
          {
            delay: rotationTL.current.duration,
            transformOrigin: '50% 50%',
            rotation: (index) =>
              (index + 1) % 2 == 0
                ? 320 + Math.random() * 5
                : -320 + Math.random() * 5,
            xPercent: (index) => Math.sin(1.57 + 0.5 * index) * 350,
            yPercent: (index) =>
              (index + 1) % 2 == 0
                ? Math.cos(Math.PI * index) * 30 - Math.random() * 60
                : Math.cos(Math.PI / index) * 30 + Math.random() * 60,
          },
          '<8%'
        )
    },
    { scope: container }
  )
  return (
    <div
      ref={container}
      className='text-fill pointer-events-none relative -mt-[100vh] flex h-screen flex-col justify-center'
    >
      <div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='we-draw flex  justify-center text-center text-[clamp(30px,22vw,22vw)] uppercase leading-none text-accent opacity-0'>
            <span className='we-draw-individual block text-accent'>W</span>
            <span className='we-draw-individual block text-accent'>E</span>
            <span className=' block text-accent'>D</span>
            <span className='we-draw-individual block text-accent'>R</span>
            <span className='we-draw-individual block text-accent'>A</span>
            <span className='we-draw-individual block text-accent'>W</span>
            <span className=' block text-accent'>.</span>
          </div>
        </div>
        <div className='relative left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2'>
          {webCards.map((card, key) => (
            <Image
              key={key}
              src={card}
              alt='KOdigital-card'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw'
              style={{
                transformOrigin: 'left top',
              }}
              className={`we-draw-image absolute left-1/2 top-1/2 m-auto w-[clamp(30px,20vw,20vw)] -translate-x-1/2 -translate-y-1/2 opacity-0 `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
