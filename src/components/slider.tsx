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
        height: '14vw',
        width: '14vw',
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
            pin: container.current,
            end: '+=600 ',
            start: 'center center',
          },
        })
      )
    }

    gsap.to(container.current, {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        end: '+=900',
        pin: true,
      },
    })
  })
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const q = gsap.utils.selector(container)
  //     const imgArr = gsap.utils.toArray('.imgFlex')
  //     console.log(imgArr)
  //     imgArr.map((ele: any) => {
  //       gsap.to(ele, {
  //         rotation:
  //           Math.random() * 60 * (Math.round(Math.random()) * 2 - 1) + 5,
  //         rotationY:
  //           Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
  //         rotationX:
  //           Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,

  //         scrollTrigger: {
  //           trigger: q('.container-img'),
  //           scrub: true,
  //           end: '+=900',
  //         },
  //       })
  //     })
  //     const tl = gsap.timeline({
  //       defaults: {
  //         ease: 'power2.in',
  //       },
  //     })
  //     tl.to(q('.container-img'), {
  //       xPercent: -100,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: q('.container-img'),
  //         scrub: true,
  //         end: '+=900',
  //       },
  //     })
  //   }, container) // <- IMPORTANT! Scopes selector text imgFlex

  //   return () => ctx.revert() // cleanup
  // }, [])

  return (
    <>
      {isCompleted ? (
        <section className='slider relative clear-both -mx-8 mb-36 mt-8 overflow-x-clip'>
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
      ) : null}
    </>
  )
}
