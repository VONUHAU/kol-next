/* eslint-disable react/display-name */
'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Dell,
  Gillete,
  Mazda,
  Volkswagen,
  Pepsi,
  Meta,
  SCJ,
  Aldi,
  ELLE,
  TDBank,
} from '../brandIcon'
import webCard from '../../../public/assets/images/webcard01.jpg'
import webCard2 from '../../../public/assets/images/webcard02.jpg'
import webCard3 from '../../../public/assets/images/webcard03.jpg'
import webCard4 from '../../../public/assets/images/webcard04.jpg'
import webCard5 from '../../../public/assets/images/webcard05.jpg'
import webCard6 from '../../../public/assets/images/webcard06.jpg'
import webCard7 from '../../../public/assets/images/webcard07.jpg'

import Image from 'next/image'
const webCards = [
  webCard6,
  webCard,
  webCard5,
  webCard2,
  webCard3,
  webCard4,
  webCard7,
]

gsap.registerPlugin(ScrollTrigger)

export const Clients = () => {
  const container = useRef<HTMLDivElement>(null)
  const masterContainer = useRef<HTMLDivElement>(null)
  const imageContainer = useRef<HTMLDivElement>(null)
  const rotationTL = useRef<GSAPTimeline>()
  const ctl = useRef<GSAPTimeline>()
  const tl = useRef<GSAPTimeline>()
  const popupTl = useRef<GSAPTimeline>()
  useGSAP(
    () => {
      rotationTL.current = gsap.timeline()
      rotationTL.current
        .set('.we-draw-image', {
          left: '50%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          rotation: 0,
        })
        .set('.disclaimer', {
          opacity: 0,
        })
        .from('.we-draw-image', {
          opacity: 0,
        })
        .to('.we-draw-image', {
          opacity: 1,
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
        .fromTo(
          '.disclaimer',
          {
            opacity: 0,
          },
          {
            opacity: 0.8,
          },
          '<0'
        )

      const topMaskGlitch = gsap
        .timeline()
        .to('.top-mask', {
          opacity: 1,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.top-mask', {
          skewX: 8,
          duration: 0.02,
          ease: 'Power4.easeInOut',
          stagger: {
            from: 'random',
            amount: 0.1,
          },
        })
        .to('.top-mask', {
          skewX: 0,
          duration: 0.02,
          ease: 'Power4.easeInOut',
          stagger: {
            from: 'random',
            amount: 0.1,
          },
        })
        .to('.top-mask', {
          opacity: 0,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.top-mask', {
          opacity: 1,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.top-mask', {
          opacity: 0,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
      const bottomMaskGlitch = gsap
        .timeline()
        .to('.bottom-mask', {
          opacity: 1,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.bottom-mask', {
          skewX: 8,
          duration: 0.02,
          ease: 'Power4.easeInOut',
          stagger: {
            from: 'random',
            amount: 0.1,
          },
        })
        .to('.bottom-mask', {
          skewX: 0,
          duration: 0.02,
          ease: 'Power4.easeInOut',
          stagger: {
            from: 'random',
            amount: 0.1,
          },
        })
        .to('.bottom-mask', {
          opacity: 0,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.bottom-mask', {
          opacity: 1,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
        .to('.bottom-mask', {
          opacity: 0,
          duration: 0.02,
          stagger: {
            from: 'random',
            amount: 0.05,
          },
        })
      const glitch = gsap
        .timeline()
        .to('.center-tripleWord', {
          skewX: 10,
          duration: 0.1,
          ease: 'Power4.easeInOut',
        })
        .to('.center-tripleWord', {
          skewX: 0,
          duration: 0.04,
          ease: 'Power4.easeInOut',
        })
        .to('.center-tripleWord', {
          opacity: 0,
          duration: 0.04,
        })
        .to('.center-tripleWord', {
          opacity: 1,
          duration: 0.04,
        })
        .to('.center-tripleWord', {
          x: -20,
          duration: 0.04,
        })
        .to('.center-tripleWord', {
          x: 0,
          duration: 0.04,
        })
        .to('.center-tripleWord', {
          textShadow: 'rgb(99, 24, 3) 16px 0px 0px',
          duration: 0.08,
        })
        .to('.center-tripleWord', {
          textShadow: 'rgb(99, 24, 3) 0px 10px 0px',
          duration: 0.06,
          ease: 'Power4.easeInOut',
        })
        .to('.center-tripleWord', {
          textShadow: 'rgb(99, 24, 3) 0px 0px 0px',
          duration: 0.06,
          ease: 'Power4.easeInOut',
        })

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'center center',
          end: () => `+=${window.innerHeight * 2}`,
          scrub: true,
          pin: true,
        },
      })
      tl.current
        .to('.client', {
          opacity: 1,
          stagger: {
            amount: 0.5,
            from: 'center',
            grid: 'auto',
          },
        })
        .to('.clients', {
          opacity: 0,
          onComplete: () => {
            popupTl.current?.restart()
          },
        })

      popupTl.current = gsap.timeline({
        paused: true,
      })
      popupTl.current
        .to('.triple-word-popup', {
          opacity: 1,
          onStart: () => {
            document.body.style.overflow = 'hidden'
          },
        })
        .fromTo(
          '.part-01',
          {
            xPercent: '0',
            stagger: 0.1,
            duration: 2,
            ease: 'power3.inOut',
          },
          {
            xPercent: '-200',
            stagger: 0.1,
            duration: 2,
            ease: 'power3.inOut',
          },
          '<0'
        )
        .to(
          '.triple-word-popup',
          {
            opacity: 0,
          },
          '-=5%'
        )
        .to(
          '.triple-words-warper',
          {
            opacity: 1,
          },
          '<0'
        )
        .add(glitch)
        .add(topMaskGlitch, '-=0.4')
        .add(bottomMaskGlitch, '<0.1')
        .to('.triple-words-warper', {
          opacity: 0,
        })
        .to(
          '.we-draw',
          {
            opacity: 1,
            onComplete: () => {
              rotationTL.current?.restart()
            },
          },
          '<0'
        )
        .add(rotationTL.current, '<0')

      ctl.current = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: imageContainer.current,
            scrub: true,
            pin: true,
            start: 'center center',
            end: () => `+=${window.innerHeight * 1.5}`,
          },
          ease: 'power3.inOut',
        })
        .to('.we-draw-individual', {
          yPercent: 'random(-30, -100)',
          stagger: {
            amount: 0.2,
            from: 'center',
          },
        })
        .set(
          '.we-draw-image',
          {
            rotation: (index) => index * 5,
          },
          '<8%'
        )
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
          '<0'
        )
    },
    { scope: masterContainer }
  )
  return (
    <div ref={masterContainer}>
      <div className='text-fill relative font-tungstenNarrow sm:py-20 '>
        <div
          ref={container}
          className='client flex h-[100vh] w-full flex-col items-center justify-center'
        >
          <div className='clients relative'>
            <p className=' text-center text-[clamp(30px,32vw,32vw)] uppercase leading-none text-accent '>
              CLIENTS:
            </p>
            <div className='clients absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
              <div className='flex items-center justify-center gap-1'>
                <Dell />
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  FATFACE
                </span>
                <Gillete />
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  ALIENWARE
                </span>
                <Mazda />
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  GOOGLE
                </span>
              </div>
              <div className='flex items-center justify-center gap-1'>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  WWF
                </span>
                <Pepsi />
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  PIZAHUT
                </span>

                <SCJ width='clamp(30px,13vw,13vw)' />
                <Meta width='clamp(30px,12vw,12vw)' />
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  MOBILO
                </span>
                <Volkswagen />
              </div>
              <div className='flex items-center justify-center'>
                <Aldi />
                <span className='client mx-1 text-[4vw] uppercase leading-[1] opacity-0 sm:mx-2'>
                  BetterSaver
                </span>
                <TDBank />
                <span className='client text-[4vw] uppercase leading-[1] opacity-0'>
                  Babbel
                </span>
                <ELLE width='clamp(24px,6.5vw,6.5vw)' />
                <span className='client text-[4vw] uppercase leading-[1] opacity-0'>
                  biosense
                </span>
                <span className='client text-[4vw] uppercase leading-[1] opacity-0'>
                  comdirect
                </span>
              </div>
              <div className='flex items-center justify-center'>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  LIONSGATE.
                </span>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  KOCH MEDIA.
                </span>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  KEEN.
                </span>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  SIDESHOW COLLECTIBLES.
                </span>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  METAL HAMMER.
                </span>
                <span className='client text-[4vw] leading-[1] opacity-0'>
                  WIRED.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='pointer-events-none fixed left-0 top-[0] flex h-screen w-screen flex-col justify-center'>
          <div className='triple-word-popup  rotate-[-10deg] leading-[0.8] opacity-0'>
            <div className='part-01 flex flex-col items-center justify-center'>
              <div className='flex flex-nowrap whitespace-nowrap'>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
                <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                  WE DRAW.
                </span>
              </div>
            </div>
            <div className=' part-01 flex flex-nowrap whitespace-nowrap'>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
            </div>
            <div className=' part-01 flex flex-nowrap whitespace-nowrap'>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,30vw,30vw)] uppercase text-accent'>
                WE DRAW.
              </span>
            </div>
          </div>
          <div className='triple-words-warper opacity-1 absolute flex h-full w-full flex-col items-center justify-center opacity-0'>
            <div className='top-mask opacity-1 -mt-[0.6vw] h-[3vw] overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.76]  text-accent'>
                WE DRAW.
              </span>
            </div>
            <div className='top-mask opacity-1 -mt-[0.6vw] h-[2.5vw] overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.76]  text-accent'>
                WE DRAW.
              </span>
            </div>
            <div className='top-mask opacity-1 -mt-[0.6vw] h-[1.6vw] overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.76]  text-accent'>
                WE DRAW.
              </span>
            </div>
            <span className='text-tungsten center-tripleWord -mb-[0.2vw] -mt-[0.6vw]  text-[clamp(30px,22vw,22vw)] uppercase  leading-[0.73] text-accent opacity-0'>
              WE DRAW.
            </span>
            <div className='bottom-mask opacity-1 -mb-[0.2vw] flex h-[1.6vw] items-end overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.75] text-accent'>
                WE DRAW.
              </span>
            </div>

            <div className='bottom-mask opacity-1 -mb-[0.2vw] flex h-[1.8vw] items-end overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.75] text-accent'>
                WE DRAW.
              </span>
            </div>

            <div className='bottom-mask opacity-1 -mb-[0.2vw] flex h-[1.4vw] items-end overflow-hidden opacity-0'>
              <span className='text-tungsten text-[clamp(30px,22vw,22vw)] uppercase leading-[0.75] text-accent'>
                WE DRAW.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={imageContainer}
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
                className={`we-draw-image absolute left-1/2 top-1/2 m-auto w-[clamp(30px,20vw,20vw)] -translate-x-1/2 -translate-y-1/2 opacity-0 `}
              />
            ))}
          </div>
          <div className='disclaimer absolute left-[50%] top-[83%] -translate-x-1/2 whitespace-nowrap text-[clamp(18px,2.7vw,36px)] opacity-0'>
            <p>*Created with: hand drawing, AI, and digital tools</p>
          </div>
        </div>
      </div>
    </div>
  )
}
