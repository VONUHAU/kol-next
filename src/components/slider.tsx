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
  '/assets/images/album1.jpg',
  '/assets/images/album3.jpg',
  '/assets/images/album4.jpg',
  '/assets/images/album5.jpg',
  '/assets/images/album6.jpg',
  '/assets/images/album2.jpg',
  '/assets/images/album7.jpg',
  '/assets/images/album1.jpg',
  '/assets/images/album3.jpg',
  '/assets/images/album4.jpg',
  '/assets/images/album5.jpg',
  '/assets/images/album6.jpg',
  '/assets/images/album2.jpg',
  '/assets/images/album7.jpg',
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
  useGSAP(() => {
    const imageArr: HTMLDivElement[] = gsap.utils.toArray('.imgFlex')
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
                minWidth: '120px',
                minHeight: '120px',
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
