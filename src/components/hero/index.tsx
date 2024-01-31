'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image2 from '../../../public/assets/images/hh6.png'
import Image3 from '../../public/assets/images/hh7.png'
import Image4 from '../../public/assets/images/hh8.png'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .set('.creating', { yPercent: 50 })
        .set('.brand', { yPercent: 50 })
        .set('.ignore', { yPercent: 50 })

        .fromTo(
          '.impossible',
          { scaleY: 0, display: 'none', yPercent: -60 },
          { scaleY: 1, display: 'block', yPercent: -60 }
        )
        .to('.creating', { yPercent: 0 }, '<0')
        .to('.brand', { yPercent: 0 }, '<0')
        .to('.ignore', { yPercent: 170 }, '<0')
        .from('.image-hero', { scale: 0 })
        .to('.hero2', { xPercent: 200, yPercent: 65 })
        .to('.hero3', { xPercent: 80, yPercent: 100 }, '<0')
        .to('.hero4', { xPercent: -230, yPercent: -200 }, '<0')
        .to('.hero5', { xPercent: -180, yPercent: -90 }, '<0')
    },
    { scope: container }
  )

  return (
    <div ref={container} className='relative mt-20 w-full'>
      <div className='texts flex flex-col items-center justify-center'>
        <p className='hero-text creating font-serif'>CREATING</p>
        <p className='hero-text brand font-serif'>BRAND</p>
        <p className='md:6xl ignore hero-text whitespace-nowrap font-serif '>
          TO IGNORE
        </p>
        <p className='impossible hidden font-tungsten text-[clamp(4rem,18vw,18vw)] font-black leading-[0.8] text-secondary'>
          IMPOSSIBLE
        </p>
      </div>
      <div className='image-hero hero2 absolute left-1/2 top-1/2 h-[clamp(90px,16vw,16vw)] w-[clamp(60px,12vw,12vw)] -translate-x-1/2 -translate-y-1/2 rotate-12'>
        <Image src='/assets/images/hh1.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero3 absolute left-1/2 top-1/2 h-[clamp(90px,16vw,16vw)] w-[clamp(60px,12vw,12vw)] -translate-x-1/3 -translate-y-1/3 -rotate-12'>
        <Image src='/assets/images/hh3.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero4 absolute left-1/2 top-1/2 h-[clamp(100px,6vw,6vw)] w-[clamp(180px,11vw,11vw)] -translate-x-1/2 -translate-y-1/2 '>
        <Image src='/assets/images/hh4.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero5 rotate-5 absolute left-1/2 top-1/2 h-[clamp(120px,7vw,7vw)] w-[clamp(140px,7.2vw,7.2vw)] -translate-x-1/2 -translate-y-1/2'>
        <Image src='/assets/images/hh5.png' fill alt='kol-next'></Image>
      </div>
      {/* <div className='absolute left-1/2 top-1/2 h-[clamp(180px,13vw,13vw)] w-[clamp(120px,8vw,8vw)]'>
        <Image
          src={Image2}
          alt='Picture of the author'
          className='h-full w-full'
        />
      </div> */}

      {/* <div className='images absolute left-1/2 top-1/2 h-[35vw] w-[25vw] -translate-x-1/2 -translate-y-1/2 rotate-12'>
        <Image src='/assets/images/hh6.png' fill alt='kol-next'></Image>
      </div>
      <div className='images absolute left-1/2 top-1/2 h-[35vw] w-[25vw] -translate-x-1/2 -translate-y-1/2 rotate-12'>
        <Image src='/assets/images/hh7.png' fill alt='kol-next'></Image>
      </div>
      <div className='images absolute left-1/2 top-1/2 h-[35vw] w-[25vw] -translate-x-1/2 -translate-y-1/2 rotate-12'>
        <Image src='/assets/images/hh8.png' fill alt='kol-next'></Image>
      </div> */}
      <div className='hero-small-text mt-10 flex items-center justify-center gap-4 whitespace-nowrap sm:gap-20'>
        <div className='md-text-xs flex flex-col items-center justify-center text-[10px] uppercase lg:text-[0.8vw]'>
          <span className='smallUpper'>Worldwide Design</span>
          <span className='swearLine'>USA, SA, Tokyo</span>
        </div>
        <div className='md-text-xs flex flex-col items-center justify-center text-[10px] uppercase lg:text-[0.8vw]'>
          <span className='smallUpper'>Branding and</span>
          <span className='swearLine'>Digital Design</span>
        </div>
      </div>
    </div>
  )
}
