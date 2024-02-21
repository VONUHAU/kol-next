'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export const Clients = () => {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.to('.client', {
      opacity: 1,
      stagger: {
        amount: 0.3,
        from: 'center',
        grid: 'auto',
      },
      scrollTrigger: {
        trigger: container.current,
        start: '-=200',
        end: '+=1900',
        scrub: true,
        pin: true,
      },
    })
  })
  return (
    <div
      ref={container}
      className='text-fill relative font-tungstenNarrow sm:py-20'
    >
      <p className='clients text-center text-[32vw] uppercase leading-none text-accent sm:text-[20vw]'>
        CLIENTS:
      </p>
      <div className='clients absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2'>
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
          <span className='client text-[3vw] leading-[1] opacity-0'>KEEN.</span>
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
  )
}
