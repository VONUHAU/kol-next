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
  const imageRefs = useRef<HTMLDivElement[]>([])
  const tl = useRef<GSAPTimeline>()

  useGSAP(
    () => {
      const initImage = () => {
        const animations = imageRefs.current.map((el, index) =>
          gsap.to(el, {
            opacity: 1,
            xPercent: Math.random() > 0.5 ? 1 : -1 * Math.random() * 40,
            duration: 0.1,
            delay: index * 0.05,
          })
        )

        return animations
      }
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          end: '+=6000',
        },
      })
      tl.current
        .to('.part-01', {
          xPercent: '-250',
          duration: 2,
          ease: 'power3.inOut',
        })
        .to('.intro', { opacity: 0 })
        .to(imageRefs.current, {
          opacity: 1,
          stagger: 0.1,
        })
        .to(imageRefs.current, {
          stagger: 0.1,
          rotation: (index) => index * 5,
        })

      gsap.fromTo(
        imageRefs.current,
        { scale: 0.4 },
        {
          rotate: 720,
          scrollTrigger: {
            trigger: imageRefs.current,
            scrub: true,
            pin: true,
            end: '+=600 ',
            start: 'center center',
            markers: true,
          },
        }
      )
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
