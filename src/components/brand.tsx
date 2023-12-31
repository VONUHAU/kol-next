import React from 'react'
import Image from 'next/image'

type PopupProp = {
  delay: string
  sentence: string
  top: string | number
  left: string | number
  background: string
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
const Popup: React.FC<PopupProp> = ({
  sentence,
  top,
  left,
  delay,
  background,
}) => {
  return (
    <div
      className='popup absolute block w-max rounded-full bg-tertiary px-2 py-1.5 text-sm font-medium text-black'
      style={{
        background,
        left,
        top,
        animationDelay: delay,
      }}
    >
      {sentence}
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
          {popups.slice(0, 3).map((value, key) => (
            <Popup
              sentence={value}
              delay={`${key * 2}s`}
              key={key}
              background={bgs[Math.floor(Math.random() * 4)]}
              left={`${Math.random() * 10 * 6}%`}
              top={`${Math.random() * 10 * 6}%`}
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
              delay={`${key * 2 + 2}s`}
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
              delay={`${key * 2 + 2}s`}
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
              delay={`${key * 2 + 4}s`}
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
