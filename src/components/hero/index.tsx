'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image2 from '../../../public/assets/images/hh6.png'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  useGSAP(
    () => {
      tl.current = gsap.timeline()

      tl.current
        .from('.creating, .ignore', { xPercent: 20, duration: 0.7 })
        .from('.brand', { xPercent: -20, duration: 0.7 }, '<0')
        .to(
          '.creating > span',
          {
            opacity: 1,

            stagger: {
              ease: 'none',
              amount: 0.6,
            },
          },
          '<0'
        )
        .to('.brand > span', { opacity: 1, stagger: 0.1 }, '<0')
        .to('.ignore > span', { opacity: 1, stagger: 0.1 }, '<0')
        .fromTo(
          '.impossible',
          { scaleY: 0, display: 'none', yPercent: -60 },
          { scaleY: 1, display: 'block', yPercent: -60 }
        )
        .to('.creating', { yPercent: -50 }, '<0')
        .to('.brand', { yPercent: -50 }, '<0')
        .to('.ignore', { yPercent: 120 }, '<0')
        .to('.hero-small-text', { yPercent: 0 }, '<0')
        .fromTo(
          '.image-hero',
          { scale: 0, display: 'none' },
          {
            scale: 1,
            display: 'block',
            stagger: {
              amount: 0.2,
              ease: 'power2.out',
            },
          }
        )
        .to('.hero3', {
          xPercent: 180,
          yPercent: 110,
          duration: 1,
          ease: 'expo',
        })
        .to(
          '.hero4',
          { xPercent: -300, yPercent: -400, duration: 0.8, ease: 'expo' },
          '<0'
        )
        .to(
          '.hero5',
          { xPercent: -280, yPercent: 200, duration: 1, ease: 'expo' },
          '<0'
        )
        .to(
          '.hero6',
          { xPercent: 300, yPercent: -100, duration: 0.7, ease: 'expo' },
          '<0'
        )
        .to(
          '.hero7',
          { xPercent: -340, yPercent: -30, duration: 1, ease: 'expo' },
          '<0'
        )
        .to(
          '.hero8',
          { xPercent: 240, yPercent: 50, duration: 0.9, ease: 'expo' },
          '<0'
        )
        .to('.hero2', {
          immediateRender: false,
          yPercent: -40,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })
        .to('.hero3', {
          immediateRender: false,
          xPercent: 160,
          yPercent: 90,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })
        .to('.hero5', {
          immediateRender: false,
          xPercent: -250,
          yPercent: 100,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })

        .to('.hero6', {
          immediateRender: false,
          xPercent: 260,
          yPercent: -80,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })
        .to('.hero7', {
          immediateRender: false,
          xPercent: -320,
          yPercent: -25,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })
        .to('.hero8', {
          immediateRender: false,
          xPercent: 235,
          yPercent: 50,
          scrollTrigger: {
            trigger: '.hero-small-text',
            scrub: true,
            start: 'center center',
            end: 'bottom top',
          },
        })
    },
    { scope: container }
  )

  return (
    <div ref={container} className='relative mt-20 w-full'>
      <div className='texts flex flex-col items-center justify-center'>
        <div className='creating hero-text translate-y-1/2 font-serif'>
          <span className='opacity-20'>C</span>
          <span className='opacity-20'>R</span>
          <span className='opacity-20'>E</span>
          <span className='opacity-20'>A</span>
          <span className='opacity-20'>T</span>
          <span className='opacity-20'>I</span>
          <span className='opacity-20'>N</span>
          <span className='opacity-20'>G</span>
        </div>

        {/* <p className='hero-text brand font-serif'>CREATING</p> */}
        <div className='hero-text brand translate-y-1/2 font-serif'>
          <span className='opacity-20'>B</span>
          <span className='opacity-20'>R</span>
          <span className='opacity-20'>A</span>
          <span className='opacity-20'>N</span>
          <span className='opacity-20'>D</span>
        </div>
        <p className='md:6xl ignore hero-text translate-y-1/2 whitespace-nowrap font-serif'>
          <span className='opacity-20'>T</span>
          <span className='opacity-20'>O</span>
          <span> </span>
          <span className='opacity-20'>I</span>
          <span className='opacity-20'>G</span>
          <span className='opacity-20'>N</span>
          <span className='opacity-20'>O</span>
          <span className='opacity-20'>R</span>
          <span className='opacity-20'>E</span>
        </p>
        <p className='impossible hidden font-tungsten text-[clamp(4rem,18vw,18vw)] font-black leading-[0.8] text-secondary'>
          IMPOSSIBLE
        </p>
      </div>
      <div className='image-hero hero2 absolute left-1/2 top-1/2 hidden h-[clamp(90px,16vw,16vw)] w-[clamp(60px,12vw,12vw)] -translate-x-1/2 -translate-y-1/2 rotate-12'>
        <Image src='/assets/images/hh1.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero3 -rotate-5 absolute left-1/2 top-1/2 hidden h-[clamp(90px,16vw,16vw)] w-[clamp(60px,12vw,12vw)] -translate-x-1/3 -translate-y-1/3'>
        <Image src='/assets/images/hh3.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero4 absolute left-1/2 top-1/2 hidden h-[clamp(60px,4vw,4vw)] w-[clamp(120px,9vw,9vw)] -translate-x-1/2 -translate-y-1/2 '>
        <Image src='/assets/images/hh4.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero5 rotate-5 absolute left-1/2 top-1/2 hidden h-[clamp(120px,7vw,7vw)] w-[clamp(140px,7.2vw,7.2vw)] -translate-x-1/2 -translate-y-1/2'>
        <Image src='/assets/images/hh5.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero6 rotate-5 absolute left-1/2 top-1/2 hidden h-[clamp(70px,15vw,15vw)] w-[clamp(45px,11vw,11vw)] -translate-x-1/2 -translate-y-1/2'>
        <Image src='/assets/images/hh6.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero7 rotate-5 absolute left-1/2 top-1/2 hidden h-[clamp(90px,16vw,16vw)] w-[clamp(60px,12vw,12vw)] -translate-x-1/2 -translate-y-1/2'>
        <Image src='/assets/images/hh7.png' fill alt='kol-next'></Image>
      </div>
      <div className='image-hero hero8 rotate-5 absolute left-1/2 top-1/2 hidden h-[clamp(120px,7vw,7vw)] w-[clamp(140px,7.2vw,7.2vw)] -translate-x-1/2 -translate-y-1/2'>
        <Image src='/assets/images/hh8.png' fill alt='kol-next'></Image>
      </div>
      <div className='hero-small-text mt-10 flex translate-y-[200%] items-center justify-center gap-4 whitespace-nowrap sm:gap-20'>
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
