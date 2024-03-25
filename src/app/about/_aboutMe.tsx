'use client'
import Image from 'next/legacy/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const sentences = [
  "Hi! I'm Tran Khac Oai (Oil), a Vietnam-based motion graphic",
  ' designer who brings visuals to life for various clients and ',
  'platforms. With a passion for dynamic design, my 5 years',
  ' of experience have sharpened my eye for detail  making me ',
  'a meticulous problem-solver and dedicated trainer. I thrive ',
  'on  collaboration, always eager to listen, learn, and guide ',
  'colleagues to find the best solutions and reach their full potential.',
]

export default function AboutMe() {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.to('.line', {
        opacity: 0.3,
        clipPath: 'inset(0px 0% 0% 0)',
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
          start: 'center center',
          end: `+=${window.innerHeight * 2}`,
        },
      })
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
          {sentences.map((value, key) => (
            <div
              className='line'
              style={{ clipPath: 'inset(0px 100% 0% 0);' }}
              key={key}
            >
              {value}
            </div>
          ))}
          {/* {sentences[0].split('').map((char, index) => (
            <span
              className={
                char != ' '
                  ? `char text-section inline-block uppercase `
                  : `char text-section uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[1].split('').map((char, index) => (
            <span
              className={
                char == ' '
                  ? `char text-section uppercase`
                  : index >= 20 && index <= 35
                  ? `char text-section inline-block font-bold  uppercase text-accent`
                  : `char text-section inline-block uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[2].split('').map((char, index) => (
            <span
              className={
                char == ' '
                  ? `char text-section uppercase`
                  : index >= 39 && index <= 50
                  ? `char text-section inline-block font-bold uppercase text-accent`
                  : `char text-section inline-block uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[3].split('').map((char, index) => (
            <span
              className={
                char != ' '
                  ? `char text-section inline-block uppercase `
                  : `char text-section uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[4].split('').map((char, index) => (
            <span
              className={
                char != ' '
                  ? `char text-section inline-block uppercase `
                  : `char text-section uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[5].split('').map((char, index) => (
            <span
              className={
                char != ' '
                  ? `char text-section inline-block uppercase `
                  : `char text-section uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))}
          {sentences[6].split('').map((char, index) => (
            <span
              className={
                char != ' '
                  ? `char text-section inline-block uppercase `
                  : `char text-section uppercase `
              }
              key={index}
            >
              {char}
            </span>
          ))} */}
        </div>

        <div className='globe absolute bottom-0 right-0 -z-[1] h-[clamp(110px,21vw,21vw)] w-[clamp(100px,20vw,20vw)]'>
          <Image
            src='/assets/images/about/globe.png'
            alt='global'
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}
