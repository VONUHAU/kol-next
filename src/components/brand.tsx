import React, { ReactNode, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
type PopupProp = {
  start: number
  end: number
  offsetTop: number
  offsetLeft: number
  style?: any
}
const popups = [
  'Crazy Ideal Make Real',
  'Transformation Branding',
  'Award Winning Experiment',
  "Design That's Noticed",
  'Wow Worthy Website',
  'Find Your Audience',
  'Impact Design',
  'Look & Feel your Best',
]
const bgs = ['#ffe7de', '#efbeac', '#fbf8f7', '#f3d1c4']
export const Popup: React.FC<PopupProp> = ({
  style,
  start,
  end,
  offsetTop,
  offsetLeft,
}) => {
  const tl = useRef<GSAPTimeline>()
  const container = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      tl.current = gsap.timeline({
        defaults: { duration: 1 },
        repeatRefresh: true,
        repeat: -1,
        repeatDelay: 1,
      })
      tl.current
        .to('.award', {
          scale: 1,
          stagger: {
            amount: 1.2,
            from: 'random',
          },
        })
        .to('.award', { scale: 1, duration: 2 })
        .to('.award', {
          scale: 0,
          stagger: {
            amount: 1.5,
            from: 'random',
          },
          onComplete: () => {
            gsap.set('.award', {
              xPercent: 'random(5, 40)',
              yPercent: 'random(5, 60)',
            })
          },
        })
    },
    { scope: container }
  )
  return (
    <div ref={container}>
      {popups.slice(start, end).map((value, key) => (
        <div
          key={key}
          style={{
            background: bgs[Math.floor(Math.random() * 4)],
            left: `${5 + key * offsetLeft}%`,
            top: `${10 + key * offsetTop}%`,
          }}
          className='award absolute flex scale-0 cursor-pointer  items-center justify-center gap-1  whitespace-nowrap rounded-full px-2 py-1.5 text-[clamp(10px,1.5vw,1.5vw)]'
        >
          <div className='relative flex items-center justify-center'>
            <p className='text-primary decoration-primary'>{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Branding = () => {
  return (
    <div className='branding text-fill relative max-h-max w-full py-5 sm:py-20'>
      <div className='flex items-center justify-around gap-4'>
        <div className='relative block h-[11vw] w-1/3 overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_1.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            fill
          />
        </div>

        <div className='relative text-[16vw] text-secondary'>
          <p className='font-tungstenNarrow leading-[0.8]'>BRANDING</p>
          <Popup start={0} end={3} offsetLeft={30} offsetTop={20} />
        </div>
        <div className='relative block h-[11vw] w-1/3 overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_2.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            fill
          />
        </div>
      </div>
      <div className='my-2.5 flex items-center justify-around border-y border-secondary py-4'>
        <div className='relative text-[16vw] text-secondary'>
          <p className='font-tungstenNarrow leading-[0.8]'>DIGITAL</p>
          <Popup start={4} end={6} offsetLeft={30} offsetTop={20} />
        </div>
        <div className='relative block h-[11vw] w-[24%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/Small-03.png'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            fill
          />
        </div>
        <div className='relative text-[16vw]  text-secondary'>
          <p className='font-tungstenNarrow uppercase leading-[0.8]'>DESIGN</p>
          <Popup start={5} end={7} offsetLeft={30} offsetTop={20} />
        </div>
      </div>
      <div className='flex items-center justify-around'>
        <div className='relative block h-[11vw] w-[20%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_3.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            fill
          />
        </div>
        <div className='relative text-[16vw] text-secondary'>
          <p className='font-tungstenNarrow uppercase leading-[0.8]'>
            STORYTELLING
          </p>
          <Popup start={2} end={6} offsetLeft={30} offsetTop={20} />
        </div>
        <div className='relative block h-[11vw] w-[20%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_5.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            fill
          />
        </div>
      </div>
    </div>
  )
}
