'use client'
import { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const images = [
  '/assets/images/album1-640x640.jpg',
  '/assets/images/album2-640x640.jpg',
  '/assets/images/album6-640x640.jpg',
  '/assets/images/Black_Midi-640x640.jpg',
  '/assets/images/cool_side-640x640.jpg',
  '/assets/images/Home-640x640.png',
  '/assets/images/Primal_Heart-640x640.jpg',
  '/assets/images/beer-640x640.png',
  '/assets/images/beer4-640x640.jpg',
  '/assets/images/group_drinks-640x640.png',
  '/assets/images/album1-640x640.jpg',
  '/assets/images/album2-640x640.jpg',
  '/assets/images/album6-640x640.jpg',
]

interface IAppProps {
  src: string
  rotate: string
  w: number
  h: number
  top?: string
}

const RImage = ({ src, rotate, w, h, top }: IAppProps) => {
  return (
    <div
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
}

gsap.registerPlugin(ScrollTrigger)

export const Slider = () => {
  const ref = useRef<HTMLDivElement>(null)

  //set up images slide animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref)
      const imgArr = gsap.utils.toArray('.imgFlex')
      console.log(imgArr)
      imgArr.map((ele: any) => {
        gsap.to(ele, {
          rotation:
            Math.random() * 60 * (Math.round(Math.random()) * 2 - 1) + 5,
          rotationY:
            Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,
          rotationX:
            Math.random() * 10 * (Math.round(Math.random()) * 2 - 1) + 5,

          scrollTrigger: {
            trigger: q('.container-img'),
            scrub: true,
            end: '+=900',
          },
        })
      })
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.in',
        },
      })
      tl.to(q('.container-img'), {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: q('.container-img'),
          scrub: true,
          end: '+=900',
        },
      })
    }, ref) // <- IMPORTANT! Scopes selector text imgFlex

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <section className='slider relative clear-both -mx-8 mb-24 mt-44 overflow-x-clip'>
      <div className='relative -translate-y-[15vw]'>
        <div className='container-img flex'>
          {images.map((value, index) => (
            <RImage
              key={index}
              src={value}
              w={350}
              h={350}
              rotate={`${Math.floor(
                Math.random() * 30 * (Math.round(Math.random()) * 2 - 1) + 5
              )}deg`}
              top={`${Math.floor(
                Math.random() * 60 * (Math.round(Math.random()) * 2 - 1) + 8
              )}px`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
