'use client'
import Image from 'next/legacy/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const sentences =
  "Hi! I'm Tran Khac Oai (Oil), a Vietnam-based motion graphic designer who brings visuals to life for various clients and platforms. With a passion for dynamic design, my 5 years of experience have sharpened my eye for detail, making me a meticulous problem-solver and dedicated trainer. I thrive on collaboration, always eager to listen, learn, and guide colleagues to find the best solutions and reach their full potential."

// const sentences = [
//   "Hi! I'm Tran Khac Oai (Oil), a Vietnam-based motion graphic",
//   ' designer who brings visuals to life for various clients and ',
//   'platforms. With a passion for dynamic design, my 5 years',
//   ' of experience have sharpened my eye for detail  making me ',
//   'a meticulous problem-solver and dedicated trainer. I thrive ',
//   'on  collaboration, always eager to listen, learn, and guide ',
//   'colleagues to find the best solutions and reach their full potential',
// ]

export default function AboutMe() {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.fromTo(
        '.line',
        {
          clipPath: 'inset(0px 100% 0% 0)',
        },
        {
          clipPath: 'inset(0px 0% 0% 0)',
          stagger: 0.3,
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            pin: true,
            start: 'center center',
            end: `+=${window.innerHeight * 2}`,
          },
        }
      )
      gsap.to('.globe', {
        yPercent: -80,
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          start: 'center center+=50px',
        },
      })
    },
    { scope: container }
  )
  return (
    <div className='space-y-8  font-tungsten text-secondary sm:space-y-14  lg:space-y-24 '>
      <div className='relative my-4 sm:my-4 md:my-12 lg:my-24' ref={container}>
        <div className='text-[clamp(20px,3vw,3vw)] font-medium'>
          <p>About me</p>
        </div>

        <div className='text-[clamp(30px,5.5vw,5.5vw)] font-medium leading-none'>
          {sentences.split(/(\b|\s|,|\()/).map((value, key) => (
            <span
              className={
                value != ' '
                  ? `line ${
                      (key >= 12 && key <= 26) || (key >= 55 && key <= 72)
                        ? 'text-accent'
                        : 'text-white'
                    } text-section inline-block uppercase `
                  : `line text-section uppercase `
              }
              key={key}
            >
              {`${value}  `}
            </span>
          ))}
        </div>

        <div className='globe absolute bottom-0 right-0 -z-[1] h-[clamp(110px,21vw,21vw)] w-[clamp(100px,20vw,20vw)]'>
          <Image
            src='/assets/images/about/A1_V2.jpg'
            alt='global'
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}
