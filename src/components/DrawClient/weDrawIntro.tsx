import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
type Props = {
  elem: React.RefObject<HTMLDivElement>
}
export const WeDrawIntro = ({ elem }: Props) => {
  const container = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()
  // useGSAP(
  //   () => {
  //     tl.current = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container.current,
  //       },
  //     })
  //     tl.current
  //       .to('.part-01', {
  //         xPercent: '-100',
  //         duration: 2,
  //       })
  //       .to(elem.current, { opacity: 1 })
  //   },
  //   { scope: container }
  // )
  return (
    <div
      ref={container}
      className='container absolute  top-0 h-screen w-screen rotate-[-10deg] leading-[0.8]'
    >
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
  )
}
