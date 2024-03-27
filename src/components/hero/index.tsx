/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null)

  const tl = useRef<GSAPTimeline>()
  const imageScrolling = (
    className: string,
    trigger: string,
    xPercent: number,
    yPercent: number
  ) => {
    const animate = gsap.to(className, {
      xPercent,
      yPercent,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: 'center center',
        end: 'bottom top',
        toggleActions: 'play complete complete complete',
      },
    })
    return animate
  }
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      const breakPoint = 640
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        ({ conditions }) => {
          tl.current = gsap.timeline()
          const { isMobile } = conditions

          tl.current
            .from('.creating, .ignore', {
              xPercent: 20,
              duration: 0.7,
              onStart: () => {
                console.log('still on lock')
                document.body.style.overflow = 'hidden'
              },
            })
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
              { scaleY: 0, display: 'none' },
              { scaleY: 1, display: 'block' }
            )
            .to('.creating', { yPercent: -50 }, '<0')
            .to('.brand', { yPercent: -50 }, '<0')
            .to('.ignore', { yPercent: 120 }, '<0')
            .to('.hero-small-text', { opacity: 1 }, '<0')
            .set('.image-hero', {
              scale: 0,
              display: 'none',
              top: (index) => (index == 6 ? '50%' : '50%'),
              left: (index) => (index == 6 ? '50%' : '50%'),

              xPercent: (index) => (index == 6 ? 0 : -50),
              yPercent: (index) => (index == 6 ? 0 : -50),
            })
            .to('.image-hero', {
              scale: 1,
              display: 'block',
              stagger: {
                amount: 0.2,
                ease: 'power2.out',
              },
            })
            .to('.hero3', {
              duration: 1,
              top: '80%',
              left: '84%',
              xPercent: 0,
              yPercent: 0,
              ease: 'expo',
            })
            .to(
              '.hero2',
              {
                xPercent: 0,
                yPercent: 0,
                duration: 0.8,
                ease: 'expo',
              },
              '<0'
            )
            .to(
              '.hero4',
              {
                top: '54%',
                left: '84%',
                xPercent: 0,
                yPercent: 0,
                duration: 0.8,
                ease: 'expo',
              },
              '<0'
            )
            .to(
              '.hero5',
              {
                top: '2%',
                left: '80%',
                xPercent: 0,
                yPercent: 0,
                duration: 1,
                ease: 'expo',
              },
              '<0'
            )
            .to(
              '.hero6',
              {
                top: '90%',
                left: '10%',
                xPercent: 0,
                yPercent: 0,
                duration: 0.7,
                ease: 'expo',
              },
              '<0'
            )
            .to(
              '.hero7',
              {
                top: '30%',
                left: '-2%',
                xPercent: 0,
                yPercent: 0,
                duration: 1,
                ease: 'expo',
              },
              '<0'
            )
            .to(
              '.hero8',
              {
                top: isMobile ? '-20%' : '-10%',
                left: isMobile ? '45%' : '15%',
                xPercent: 0,
                yPercent: 0,
                duration: 0.9,
                ease: 'expo',
                onComplete: () => {
                  document.body.style.overflowY = 'auto'
                },
              },
              '<0'
            )
            .add(imageScrolling('.hero2', '.hero-small-text', 20, -30))
            .add(imageScrolling('.hero3', '.hero-small-text', -30, -40))
            .add(imageScrolling('.hero5', '.hero-small-text', -20, -20))
            .add(imageScrolling('.hero4', '.hero-small-text', -20, -30))
            .add(imageScrolling('.hero6', '.hero-small-text', 20, -35))
            .add(imageScrolling('.hero7', '.hero-small-text', 20, -25))
            .add(imageScrolling('.hero8', '.hero-small-text', 20, -10))
        }
      )
    },
    { scope: container }
  )

  return (
    <div
      ref={container}
      className='relative mt-[75px] h-[50vw] w-full sm:mt-[90px]'
    >
      <div className='relative'>
        <div className='hero-text flex translate-y-[20%] flex-col items-center justify-center sm:translate-y-0'>
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
          <p className='impossible hidden -translate-y-[8.6vw] font-tungsten text-[clamp(4rem,18vw,18vw)] font-black leading-[0.8] text-secondary'>
            IMPOSSIBLE
          </p>
        </div>
        <div className='hero-image-warper '>
          <div className='image-hero hero3 -rotate-5 absolute left-[84%] top-[80%] hidden  w-[clamp(60px,12vw,12vw)] '>
            <img
              src='/assets/images/hh3.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
          <div className='image-hero hero4 absolute left-[84%] top-[54%] hidden w-[clamp(54px,9vw,9vw)]  '>
            <img
              src='/assets/images/hh4.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>

          <div className='image-hero hero5 rotate-5 absolute left-[80%] top-[2%] hidden w-[clamp(72px,13vw,13vw)] '>
            <img
              src='/assets/images/hh5.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
          <div className='image-hero hero6 rotate-5 absolute left-[10%] top-[90%] hidden  w-[clamp(45px,11vw,11vw)] '>
            <img
              src='/assets/images/hh6.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
          <div className='image-hero hero7 rotate-5 absolute -left-[2%] top-[30%] hidden  w-[clamp(60px,12vw,12vw)] sm:left-[1%]'>
            <img
              src='/assets/images/hh7.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
          <div className='image-hero hero8 rotate-5 absolute -top-[14%] left-1/2 hidden  w-[clamp(50px,8vw,8vw)] -translate-x-1/2 sm:-top-[5%]  sm:left-[15%] sm:translate-x-0 '>
            <img
              src='/assets/images/hh8.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
          <div className='image-hero hero2 absolute left-1/2 top-1/2 hidden w-[clamp(60px,12vw,12vw)] -translate-x-1/2 -translate-y-1/2  rotate-12'>
            <img
              src='/assets/images/hh1.png'
              alt='KOdigital'
              className='w-full'
            />
          </div>
        </div>
      </div>

      <div className='hero-small-text mt-10 flex items-center justify-center gap-4 whitespace-nowrap opacity-0 sm:gap-20'>
        <div className='md-text-xs flex flex-col items-center justify-center text-[10px] uppercase lg:text-[0.8vw]'>
          <span className='smallUpper'>Worldwide Design</span>
          <span className='swearLine'>EMEA, NAM, APAC, UKI</span>
        </div>
        <div className='md-text-xs flex flex-col items-center justify-center text-[10px] uppercase lg:text-[0.8vw]'>
          <span className='smallUpper'>Branding and</span>
          <span className='swearLine'>Digital Design</span>
        </div>
      </div>
    </div>
  )
}
