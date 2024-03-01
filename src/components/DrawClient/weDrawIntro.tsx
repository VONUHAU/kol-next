import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { WeDraw } from './weDraw'

gsap.registerPlugin(ScrollTrigger)
type Props = {
  elem: React.RefObject<HTMLDivElement>
}
export const WeDrawIntro = () => {
  const container = useRef<HTMLDivElement>(null)
  const weDrawRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          end: '+=4000',
          toggleActions: 'play complete restart complete',
        },
      })
      tl.current
        .to('.part-01', {
          xPercent: '-250',
          duration: 2,
          ease: 'power3.inOut',
        })
        .to('.intro', { opacity: 0 })
    },
    { scope: container }
  )
  return (
    <div className='relative' ref={container}>
      <div className='container bottom-[100] h-screen w-screen leading-[0.8]'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <WeDraw ref={imageRefs} />
        </div>
        <div className='intro  rotate-[-10deg] '>
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
      </div>
    </div>
  )
}
