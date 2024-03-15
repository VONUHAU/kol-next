/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */

'use client'
import { useRef, forwardRef } from 'react'
import Image from 'next/image'
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
const RImage = forwardRef<Ref, IAppProps>(({ src, rotate, top }, ref) => {
  return (
    <div
      ref={ref}
      className={`imgFlex relative shrink-0`}
      style={{
        rotate: rotate,
        top: top,
        minWidth: '200px',
        minHeight: '200px',
        height: '20vw',
        width: '20vw',
      }}
    >
      <Image alt='kok-next-slider' src={src} fill={true} objectFit='contain' />
    </div>
  )
})

gsap.registerPlugin(ScrollTrigger)

export const Slider = () => {
  const container = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<HTMLDivElement[]>(null)
  const { isCompleted } = useWeDraw()
  //set up images slide animation
  useGSAP(() => {
    if (imageRefs && imageRefs.current) {
      console.log('is okie')
      imageRefs.current.map((el, _index) =>
        gsap.to(el, {
          rotation:
            Math.random() * 60 * (Math.round(Math.random()) * 2 - 1) + 5,
          rotationY:
            Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
          rotationX:
            Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            pin: true,
            start: 'end center',
            end: '+=600 ',
          },
        })
      )
    }

    gsap.to('.container-img', {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'end center',
        end: '+=900',
        pin: true,
        markers: true,
      },
    })
  })
  return (
    <section className='slider relative clear-both -mx-8 my-36 overflow-x-clip'>
      <div ref={container} className='relative '>
        <div className='container-img flex'>
          {images.map((value, index) => (
            <RImage
              ref={(el) => {
                if (imageRefs && imageRefs.current) {
                  return (imageRefs.current[index] = el)
                }
              }}
              key={index}
              src={value}
              w={350}
              h={350}
              rotate={`${Math.floor(
                Math.random() * 30 * (Math.round(Math.random()) * 2 - 1) + 5
              )}deg`}
              top={`${Math.floor(
                Math.random() * 20 * (Math.round(Math.random()) * 2 - 1) + 8
              )}px`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
