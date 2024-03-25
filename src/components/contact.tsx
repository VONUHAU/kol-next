import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/legacy/image'
gsap.registerPlugin(ScrollTrigger)

export const Contact = () => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
          start: 'center center',
        },
      })
      tl.current
        .from('.want-to', {
          yPercent: 70,
        })
        .from(
          '.reach-out',
          {
            yPercent: -70,
          },
          '<0'
        )
        .from(
          '.left-hand',
          {
            x: '-50vw',
          },
          '<0.01'
        )
        .from(
          '.right-hand',
          {
            x: '50vw',
          },
          '<0'
        )
        .from('.spark', {
          scale: 0,
        })
        .to(
          '.spark',
          {
            rotate: 360,
            rotation: 0.01,
            onComplete: () => {
              contactInfo.play()
            },
          },
          '<0'
        )
      const randomPosition = () => gsap.utils.random(-40, 40)
      const contactInfo = gsap
        .timeline({
          defaults: { duration: 1 },
          repeatRefresh: true,
          repeat: -1,
          repeatDelay: 1,
          paused: true,
        })
        .to('.email', {
          scale: 1,
          stagger: {
            amount: 1.2,
            from: 'random',
          },
        })
        .to('.email', { scale: 1, duration: 2 })
        .to('.email', {
          scale: 0,
          stagger: {
            amount: 1.5,
            from: 'random',
          },
          onComplete: () => {
            gsap.set('.email', {
              xPercent: randomPosition(),
              yPercent: randomPosition(),
            })
          },
        })
    },
    { scope: container }
  )

  return (
    <section className='relative -mx-8 mb-12'>
      <div ref={container}>
        <div className='relative'>
          <div className='want-to pointer-events-none text-center font-tungstenNarrow text-[clamp(24px,20vw,20vw)]  leading-none text-secondary sm:text-[14vw]'>
            Want to
          </div>
          <div className='item-center flex justify-between'>
            <div className='left-hand pointer-events-none relative h-[20vw] w-[49vw]'>
              <Image
                src='/assets/images/left-hand.webp'
                alt='kol-next-connect'
                layout='fill'
              />
            </div>
            <div className='right-hand pointer-events-none relative h-[20vw] w-[49vw]'>
              <Image
                src='/assets/images/right-hand.webp'
                alt='kol-next-connect'
                layout='fill'
              />
            </div>
          </div>
          <div className='reach-out pointer-events-none text-center font-tungstenNarrow text-[clamp(24px,20vw,20vw)] leading-none text-accent  sm:text-[14vw]'>
            Reach out?
          </div>
          <div className='spark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <svg
              width='clamp(12px,4vw,4vw)'
              fill='white'
              id='OBJECTS'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 118.18 143.02'
            >
              <defs></defs>
              <path d='m72.92,59.25c2.22-5.79,5.95-12.37,11.2-20.77.39-.63-.27-1.44-.77-.93-6.54,6.66-11.68,11.43-16.24,14.35-5.5-9.96-7.48-25.72-9.63-51.9-2.18,26.53-4.18,42.36-9.85,52.3-4.66-2.76-9.95-7.4-16.69-13.93-.51-.49-1.16.34-.75.96,5.35,8.13,9.19,14.54,11.53,20.21-8.01,6.85-20.67,9.31-41.72,11.98,21.33,2.71,34.05,5.2,42.04,12.26-2.22,5.79-5.95,12.37-11.2,20.77-.39.63.27,1.44.77.93,6.54-6.66,11.69-11.43,16.24-14.35,5.5,9.96,7.48,25.72,9.63,51.9,2.18-26.53,4.18-42.36,9.85-52.3,4.66,2.76,9.95,7.4,16.69,13.93.51.49,1.16-.34.75-.96-5.35-8.13-9.19-14.54-11.53-20.21,8.01-6.85,20.67-9.31,41.72-11.98-21.33-2.71-34.05-5.2-42.04-12.26Z' />
              <path d='m109.2,20.66c.47-1.24,1.26-2.64,2.39-4.44.08-.13-.06-.31-.16-.2-1.4,1.43-2.5,2.43-3.47,3.06-1.17-2.13-1.6-5.49-2.05-11.08-.46,5.66-.89,9.04-2.1,11.17-1-.59-2.12-1.57-3.57-2.97-.11-.1-.25.07-.16.2,1.15,1.74,1.96,3.11,2.46,4.32-1.71,1.46-4.42,1.99-8.91,2.56,4.55.58,7.27,1.11,8.98,2.61-.47,1.24-1.26,2.64-2.39,4.44-.08.13.06.31.16.2,1.4-1.43,2.5-2.43,3.47-3.06,1.17,2.13,1.6,5.49,2.05,11.08.46-5.66.89-9.04,2.1-11.17,1,.59,2.13,1.57,3.57,2.97.11.1.25-.07.16-.2-1.15-1.74-1.96-3.11-2.46-4.32,1.71-1.46,4.42-1.98,8.91-2.56-4.55-.58-7.27-1.11-8.98-2.61Z' />
            </svg>
          </div>
          <div className='email absolute left-[30%] top-[30%] flex scale-0 cursor-pointer  items-center justify-center gap-1 rounded-full bg-[#ffe7de] px-2 md:left-1/2 md:top-1/3'>
            <div className='relative flex items-center justify-center'>
              <svg
                width='clamp(20px,3vw,3vw)'
                height='clamp(23px,2vw,2vw)'
                viewBox='0 0 70 61'
              >
                <path
                  d='M65.5483 0.000377628L1.76836 32.1147L26.7911 37.5532L36.3109 58.0128L65.5483 0.000377628Z'
                  fill='#252F30'
                />
              </svg>
              <a href='mailto:trankhacoai96@gmail.com'>
                <p className='font-tungstenNarrow text-[clamp(16px,3vw,3vw)] text-primary underline decoration-primary underline-offset-2'>
                  trankhacoai96@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className='email absolute left-[40%] top-[70%] flex scale-0 cursor-pointer  items-center justify-center gap-1 rounded-full bg-[#ffe7de] px-2 md:top-[60%]'>
            <div className='relative flex items-center justify-center'>
              <svg
                width='clamp(20px,3vw,3vw)'
                height='clamp(23px,2vw,2vw)'
                viewBox='0 0 70 61'
              >
                <path
                  d='M65.5483 0.000377628L1.76836 32.1147L26.7911 37.5532L36.3109 58.0128L65.5483 0.000377628Z'
                  fill='#252F30'
                />
              </svg>
              <a href='mailto:trankhacoai96@gmail.com'>
                <p className='font-tungstenNarrow text-[clamp(16px,3vw,3vw)] text-primary underline decoration-primary underline-offset-2'>
                  trankhacoai96@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className='email absolute left-[50%] top-[70%] hidden scale-0 cursor-pointer  items-center justify-center gap-1 rounded-full bg-[#ffe7de] px-2 md:flex'>
            <div className='relative flex items-center justify-center'>
              <svg
                width='clamp(20px,3vw,3vw)'
                height='clamp(23px,2vw,2vw)'
                viewBox='0 0 70 61'
              >
                <path
                  d='M65.5483 0.000377628L1.76836 32.1147L26.7911 37.5532L36.3109 58.0128L65.5483 0.000377628Z'
                  fill='#252F30'
                />
              </svg>
              <a href='mailto:trankhacoai96@gmail.com'>
                <p className='font-tungstenNarrow text-[clamp(16px,3vw,3vw)] text-primary underline decoration-primary underline-offset-2'>
                  trankhacoai96@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
