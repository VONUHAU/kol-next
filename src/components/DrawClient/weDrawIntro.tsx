import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { WeDraw } from './weDraw'
import { useWeDraw } from '@/contexts/weDrawContext'
gsap.registerPlugin(ScrollTrigger)

export const WeDrawIntro = () => {
  const container = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<HTMLDivElement[]>([])
  const tl = useRef<GSAPTimeline>()
  const { setCompleted } = useWeDraw()

  useGSAP(
    () => {
      // //imageRefs.current.map it run IMMEDIATELY
      // const initImage = () => {
      //   const animations = imageRefs.current.map((el, index) =>
      //     gsap.to(el, {
      //       opacity: 1,
      //       xPercent: Math.random() > 0.5 ? 1 : -1 * Math.random() * 40,
      //       duration: 0.1,
      //       delay: index * 0.05,
      //     })
      //   )

      //   return animations
      // }

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play complete complete reverse',
          onLeaveBack() {
            setCompleted(false)
          },
        },
      })
      tl.current
        .set('.intro', {
          opacity: 1,
        })
        .to('.part-01', {
          xPercent: '-250',
          duration: 2,
          ease: 'power3.inOut',
          onStart: () => {
            document.body.style.overflow = 'hidden'
          },
        })
        .to('.intro', {
          opacity: 0,
          onComplete: () => {
            console.log('completed hide intro')
          },
        })
        .to(imageRefs.current, {
          opacity: 1,
          stagger: 0.1,
        })
        .to(imageRefs.current, {
          stagger: 0.05,
          transformOrigin: '50% 50%',
          rotation: (index) => index * 5,
          onComplete: () => {
            setCompleted(true)
          },
        })
      // .to(imageRefs.current, {
      //   transformOrigin: '50% 50%',
      //   rotation: (index) =>
      //     (index + 1) % 2 == 0
      //       ? 320 + Math.random() * 5
      //       : -320 + Math.random() * 5,
      //   x: (index) =>
      //     (index + 1) % 2 == 0
      //       ? index * 200 + Math.random() * 40
      //       : -index * 200 + Math.random() * 40,
      //   y: (index) =>
      //     (index + 1) % 2 == 0
      //       ? -index * 150 + Math.random() * 40
      //       : index * 150 + Math.random() * 40,

      //   scrollTrigger: {
      //     trigger: imageRefs.current,
      //     pin: true,
      //     start: 'center center',
      //     end: '+=2000',
      //     scrub: 1,
      //   },
      // })
    },
    { scope: container }
  )

  return (
    <div className='relative' ref={container}>
      <div className='container bottom-[100] h-screen w-screen leading-[0.8]'>
        <div className='intro rotate-[-10deg] '>
          <div className='part-01 flex flex-col'>
            <div className='flex flex-nowrap whitespace-nowrap'>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
            </div>
          </div>
          <div>
            <div className=' part-01 flex flex-nowrap whitespace-nowrap'>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
            </div>
          </div>
          <div>
            <div className=' part-01 flex flex-nowrap whitespace-nowrap'>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
              <span className='text-tungsten runningText text-[clamp(30px,50vh,50vh)] uppercase text-accent'>
                WE DRAW.
              </span>
            </div>
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
          <WeDraw ref={imageRefs} />
        </div>
      </div>
    </div>
  )
}
