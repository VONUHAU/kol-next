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
            x: '-54vw',
          },
          '<0.01'
        )
        .from(
          '.right-hand',
          {
            x: '54vw',
          },
          '<0'
        )
        .from('.spark', {
          scale: 0,
          duration: 0.08,
          onComplete: () => {
            contactInfo.play()
          },
        })

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
    <section className='relative mb-12'>
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
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              viewBox='0 0 61.5 95.7'
            >
              <path d='M47.2,2.3c0,8,0,8,14.3,8-14.2,0-14.3,0-14.3,8,0-8,0-8-14.3-8,14.2,0,14.3,0,14.3-8Z' />
              <path d='M0,47.9C26.7,47.7,26.7,47.6,26.8,0c0,47.6.1,47.7,26.8,47.9-26.7.1-26.7.2-26.8,47.9,0-47.6-.1-47.7-26.8-47.9Z' />
              <path d='M38.2,59.3c-1.1-1-3.1-2.6-5.9-3.6-5.4-1.9-10-.4-11.2,0-2.8,1-4.7,2.5-5.8,3.5,1-1.1,2.6-3.1,3.6-6,1.8-5.2.4-9.7,0-10.9-1-2.9-2.5-4.9-3.6-6,1.1,1,3.1,2.6,5.9,3.6,5.1,1.8,9.6.5,10.9,0,2.9-1,4.9-2.5,6.1-3.6-1,1.1-2.6,3.1-3.6,5.9-1.8,5.2-.4,9.7,0,11,1,2.9,2.5,4.9,3.6,6Z' />
            </svg>
          </div>
          <div className='email absolute left-[30%] top-[30%] flex scale-0 cursor-pointer items-center  justify-center gap-1 rounded-full bg-[#ffe7de] px-2 sm:px-4 md:left-1/2 md:top-1/3 md:px-7'>
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
          <div className='email absolute left-[40%] top-[70%] flex scale-0 cursor-pointer items-center justify-center  gap-1 rounded-full bg-[#ffe7de] px-2 sm:px-4 md:top-[60%] md:px-7'>
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
          <div className='email absolute left-[50%] top-[70%] hidden scale-0 cursor-pointer items-center  justify-center gap-1 rounded-full bg-[#ffe7de] px-2 sm:px-4 md:flex md:px-7'>
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
