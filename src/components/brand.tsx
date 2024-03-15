import React, { ReactNode } from 'react'
import Image from 'next/image'
import { useWeDraw } from '@/contexts/weDrawContext'
type PopupProp = {
  animationDelay?: string
  sentence: ReactNode | string
  top: string | number
  left: string | number
  background?: string
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
  sentence,
  animationDelay,
  style,
  ...props
}) => {
  return (
    <div
      className={`${'popup'} absolute block w-max rounded-full bg-tertiary px-2 py-1.5 text-[clamp(10px,1.5vw,1.5vw)] font-medium text-black`}
      style={{ ...props, ...style }}
    >
      {sentence}
    </div>
  )
}

export const Branding = () => {
  const { isCompleted } = useWeDraw()
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
          {popups.slice(0, 3).map((value, key) => (
            <Popup
              sentence={value}
              animationDelay={`${key * 1.2}s`}
              key={key}
              background={bgs[Math.floor(Math.random() * 4)]}
              left={`${Math.random() * 15 * 6}%`}
              top={`${Math.random() * 15 * 6}%`}
            />
          ))}
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
          {popups.slice(2, 4).map((value, key) => (
            <Popup
              sentence={value}
              animationDelay={`${key * 1.6}s`}
              key={key}
              background={bgs[Math.floor(Math.random() * 4)]}
              left={`${Math.random() * 10 * 6}%`}
              top={`${Math.random() * 10 * 6}%`}
            />
          ))}
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
          {popups.slice(2, 4).map((value, key) => (
            <Popup
              sentence={value}
              animationDelay={`${key * 1.8}s`}
              key={key}
              background={bgs[Math.floor(Math.random() * 4)]}
              left={`${Math.random() * 10 * 6}%`}
              top={`${Math.random() * 10 * 6}%`}
            />
          ))}
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
          {popups.slice(5, 8).map((value, key) => (
            <Popup
              sentence={value}
              animationDelay={`${key * 1.4}s`}
              key={key}
              background={bgs[Math.floor(Math.random() * 4)]}
              left={`${Math.random() * 10 * 6}%`}
              top={`${Math.random() * 10 * 6}%`}
            />
          ))}
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
