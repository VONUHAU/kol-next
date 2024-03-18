'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const sentences = [
  'I’M GONNA ASK YOU THE SAME',
  'DAMN THING PEOPLE ARE ALWAYS.',
  'ASKING ME.',
  'LIKE?',
  'LIKE WHAT YOU DO?',
]
export default function SplitStringToSpans() {
  const container = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       '.char',
  //       { opacity: 0.1, textShadow: 'rgb(0, 0, 0) 0px 0px 3px' },
  //       {
  //         opacity: 1,
  //         textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px',
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: container.current,
  //           scrub: 1,
  //           pin: wrapper.current,
  //           // end: 'bottom+=500 top-=650',
  //           // markers: true,
  //           pinSpacing: false,
  //         },
  //       }
  //     )
  //   }, wrapper)
  //   return () => ctx.revert()
  // }, [])
  useGSAP(
    () => {
      gsap.fromTo(
        '.char',
        { opacity: 0.1, textShadow: 'rgb(0, 0, 0) 0px 0px 3px' },
        {
          opacity: 1,
          textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px',
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            pin: true,
            start: 'center center',
            end: `+=${wrapper.current?.offsetHeight * 6}`,
          },
        }
      )
    },
    { scope: container }
  )
  // Split the input string into an array of characters
  return (
    <section className='wrapper relative' ref={wrapper}>
      <div
        ref={container}
        className='text-fill px -ml-4 flex flex-col justify-center font-tungstenNarrow sm:ml-0 sm:px-14 md:px-28'
      >
        <div className='flex  w-full  gap-1 md:flex-row md:gap-20'>
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>CHINASKI:</span>
          <div className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[0].split('').map((char, index) => (
              <span
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent`
                    : `char text-section uppercase text-transparent`
                }
                key={index}
              >
                {char}
              </span>
            ))}
            <span className='block'></span>
            {sentences[1].split('').map((char, index) => (
              <span
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent`
                    : `char text-section uppercase text-transparent`
                }
                key={index}
              >
                {char}
              </span>
            ))}
            <span className='block'></span>
            {sentences[2].split('').map((char, index) => (
              <span
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent`
                    : `char text-section uppercase text-transparent`
                }
                key={index}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className='flex w-full flex-col items-end justify-end gap-1 text-accent md:flex-row md:items-start md:gap-10'>
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>:SMV</span>
          <p className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[3].split('').map((char, index) => (
              <span
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent`
                    : `char text-section uppercase text-transparent`
                }
                key={index}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div className='flex w-full flex-col gap-1 md:flex-row md:gap-20'>
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>CHINASKI:</span>
          <p className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[4].split('').map((char, index) => (
              <span
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent`
                    : `char text-section uppercase text-transparent`
                }
                key={index}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
