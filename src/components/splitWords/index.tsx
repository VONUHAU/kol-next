'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const webSentences = [
  'Ugh, I have all these ad ideas. I need',
  'someone to take over and make it',
  'happen ASAP!',
  'Lemme cook',
  'We approved',
]
const mobileSentences = [
  'Ugh, I have all these ad ideas.',
  'I need someone to take over and',
  'make it happen ASAP!',
  'Lemme cook',
  'We approved',
]
export default function SplitStringToSpans({
  windowWidth,
}: {
  windowWidth: number | undefined
}) {
  const container = useRef<HTMLDivElement>(null)
  const sentences =
    windowWidth && windowWidth < 450 ? mobileSentences : mobileSentences
  // useGSAP(
  //   () => {
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
  //           pin: true,
  //           start: 'center center',
  //           end: `+=${window.innerHeight * 2}`,
  //         },
  //       }
  //     )
  //   },
  //   { scope: container }
  // )
  useGSAP(
    () => {
      gsap.from('.char', {
        opacity: 0.1,
        textShadow: 'rgb(0, 0, 0) 0px 0px 3px',
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
          start: 'center center',
          end: `+=${window.innerHeight * 2}`,
        },
      })
    },
    { scope: container }
  )
  // Split the input string into an array of characters
  return (
    <section className='relative px-3 sm:px-8'>
      <div
        ref={container}
        className='text-fill flex flex-col justify-center font-tungstenNarrow  sm:px-10 md:px-14'
      >
        <div className='flex  w-full  gap-1 md:flex-row md:gap-20'>
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>Client:</span>
          <div className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[0].split('').map((char, index) => (
              <span
                style={{ textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px' }}
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
                style={{ textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px' }}
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
                style={{ textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px' }}
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
        <div className='my-5 flex w-full flex-col items-end justify-end gap-1 text-accent md:flex-row md:items-start md:gap-10'>
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>KOdigital:</span>
          <p className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[3].split('').map((char, index) => (
              <span
                style={{ textShadow: 'rgb(213, 60, 4) 0px 0px 1.7px' }}
                className={
                  char != ' '
                    ? `char text-section inline-block uppercase text-transparent `
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
          <span className='text-lg sm:text-xl md:text-[2.4vw]'>Client:</span>
          <p className='text-[9vw] leading-[0.8] sm:text-[7vw]'>
            {sentences[4].split('').map((char, index) => (
              <span
                style={{ textShadow: 'rgb(245, 245, 245) 0px 0px 1.7px' }}
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
