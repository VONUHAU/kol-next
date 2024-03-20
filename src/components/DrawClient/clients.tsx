/* eslint-disable react/display-name */
'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Clients = () => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  const popupTl = useRef<GSAPTimeline>()
  useGSAP(() => {
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
      .to('.triple-word-popup', {
        opacity: 0,
      })
      .to(
        '.triple-words-warper',
        {
          opacity: 1,
        },
        '<0'
      )
      .add(glitch)
      .add(topMaskGlitch, '-=0.4')
      .to('.triple-words-warper', {
        opacity: 0,
        onComplete: () => {
          document.body.style.overflowY = 'auto'
        },
      })
  })
  return (
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
            <div className='flex items-center justify-center'>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                RIOT GAMES.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                Warner_logo WARNER BROS GAMES.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                MARVEL.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                HASBRO
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                ROCKSTEADY.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                GUERRILLA GAMES
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                DEEP SILVER.
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                SANTA MONICA STUDIO.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                BEENOX.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                AVALANCHE STUDIOS.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                YAGER.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                RUMBLE.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                . DENA.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                . RELATED DESIGNS.
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                MASSIVE ENTERTAINMENT.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                GAZILLION.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                SPARK.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                NINJA THEORY.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                PROSTHETIC RENAISSANCE.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                AERIA GAMES.
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                LIONSGATE.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                KOCH MEDIA.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                KEEN.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                SIDESHOW COLLECTIBLES.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                METAL HAMMER.
              </span>
              <span className='client text-[3vw] leading-[1] opacity-0'>
                WIRED.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed left-0 top-[0] flex h-screen w-screen flex-col justify-center '>
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
        {/* <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='text-center text-[clamp(30px,22vw,22vw)] uppercase leading-none text-accent opacity-0 '>
            <span className='text-accent'>W</span>
            <span className='text-accent'>E</span>
            <span className='text-accent'>D</span>
            <span className='text-accent'>R</span>
            <span className='text-accent'>A</span>
            <span className='text-accent'>W</span>
            <span className='text-accent'>.</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
