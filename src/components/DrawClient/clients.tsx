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
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'center center',
        end: () => `+=${window.innerHeight * 1.2}`,
        pinSpacing: true,
        scrub: true,
        pin: true,
        markers: true,
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
          popupTl.current?.play()
        },
      })

    popupTl.current = gsap.timeline({
      paused: true,
    })
    popupTl.current
      .to('.intro', {
        opacity: 1,
        onStart: () => {
          document.body.style.overflow = 'hidden'
        },
      })
      .from(
        '.part-01',
        {
          xPercent: '250',
          stagger: 0.2,
          duration: 2,
          ease: 'power3.inOut',
        },
        '<0'
      )
      .to('.intro', {
        opacity: 0,
        onComplete: () => {
          document.body.style.overflowY = 'auto'
        },
      })
  })
  return (
    <div
      ref={container}
      className='text-fill relative h-screen font-tungstenNarrow sm:py-20'
    >
      <div className='client  flex h-full w-full flex-col items-center justify-center'>
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
      <div className='absolute -top-[3%] left-0 h-screen w-screen leading-[0.8] '>
        <div className='intro rotate-[-10deg] opacity-0'>
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
          </div>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='text-center text-[26vw] uppercase leading-none text-accent opacity-0 sm:text-[20vw]'>
            <span className='text-accent'>W</span>
            <span className='text-accent'>E</span>
            <span className='text-accent'>D</span>
            <span className='text-accent'>R</span>
            <span className='text-accent'>A</span>
            <span className='text-accent'>W</span>
            <span className='text-accent'>.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
