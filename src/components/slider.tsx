/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */

'use client'
import { useRef } from 'react'
import Image from 'next/legacy/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWeDraw } from '@/contexts/weDrawContext'

const images = [
  '/assets/images/album1-640x640.jpg',
  '/assets/images/album2-640x640.jpg',
  '/assets/images/album6-640x640.jpg',
  '/assets/images/Black_Midi-640x640.jpg',
  '/assets/images/cool_side-640x640.jpg',
  '/assets/images/Home-640x640.png',
  '/assets/images/Primal_Heart-640x640.jpg',
  '/assets/images/group_drinks-640x640.png',
  '/assets/images/album1-640x640.jpg',
  '/assets/images/album2-640x640.jpg',
  '/assets/images/album6-640x640.jpg',
  '/assets/images/Black_Midi-640x640.jpg',
  '/assets/images/cool_side-640x640.jpg',
]

interface IAppProps {
  src: string
  rotate: string
  w?: number
  h?: number
  top?: string
}
type Ref = HTMLDivElement

gsap.registerPlugin(ScrollTrigger)

export const Slider = () => {
  const container = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<Ref[]>(null)
  const tl = useRef<GSAPTimeline>()
  //set up images slide animation
  useGSAP(() => {
    const imageArr: HTMLDivElement[] = gsap.utils.toArray('.imgFlex')

    // imageArr.forEach((el, _index) =>
    //   gsap.timeline().to(el, {
    //     rotation: Math.random() * 60 * (Math.round(Math.random()) * 2 - 1) + 5,
    //     rotationY: Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
    //     rotationX: Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
    //     scrollTrigger: {
    //       trigger: container.current,
    //       scrub: true,
    //       pin: true,
    //       start: 'center center',
    //       markers: true,
    //     },
    //   })
    // )

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'center center',
          end: () => `+=${window.innerHeight}`,
          pin: true,
        },
      })
      .to('.container-img', {
        xPercent: -100,
        ease: 'none',
      })
      .to(
        '.imgFlex',
        {
          rotation: 'random(-30, 30)',
          rotationY: 'random(-30, 30)',
          rotationX: 'random(-10, 10)',
        },
        '<0'
      )
  })
  return (
    <section className='slider relative clear-both -mx-8 my-36 overflow-x-clip'>
      <div className='relative '>
        <div ref={container} className='container-img flex'>
          {images.map((value, index) => (
            <div
              key={index}
              className='imgFlex relative shrink-0'
              style={{
                transform: `rotate(${Math.floor(
                  Math.random() * 30 * (Math.round(Math.random()) * 2 - 1) + 5
                )}deg)`,
                top: `${Math.floor(
                  Math.random() * 20 * (Math.round(Math.random()) * 2 - 1) + 8
                )}px`,
                minWidth: '200px',
                minHeight: '200px',
                height: '20vw',
                width: '20vw',
              }}
            >
              <Image
                alt='kok-next-slider'
                src={value}
                layout='fill'
                objectFit='contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
