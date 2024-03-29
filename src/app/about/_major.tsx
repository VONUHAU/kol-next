import React, { ReactNode } from 'react'
import Image from 'next/image'

type PopupProp = {
  animationDelay?: string
  sentence: ReactNode | string
  top: string | number
  left: string | number
  background?: string
  style?: any
}

export const Popup: React.FC<PopupProp> = ({
  sentence,
  animationDelay,
  style,
  ...props
}) => {
  return (
    <div
      className={`${
        animationDelay && 'popup'
      } absolute block w-max rounded-full bg-tertiary px-2 py-1.5 text-sm font-medium text-black`}
      style={{ ...props, ...style }}
    >
      {sentence}
    </div>
  )
}

export const Major = () => {
  return (
    <div className='branding text-fill relative max-h-max w-full'>
      <div className='flex items-center justify-around gap-4'>
        <div className='relative text-[13vw] text-secondary'>
          <p className='font-tungstenNarrow leading-[0.8] transition-all duration-75 hover:text-accent'>
            VISUAL
          </p>
        </div>
        <div className='relative block h-[9.5vw] w-[70%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_2.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            layout='fill'
          />
        </div>
      </div>
      <div className='my-2.5 flex items-center justify-around border-y border-secondary py-4'>
        <div className='relative block h-[9.5vw] w-[65%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/Small-03.png'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            layout='fill'
          />
        </div>
        <div className='relative text-[13vw] text-secondary'>
          <p className='font-tungstenNarrow leading-[0.8] transition-all duration-75 hover:text-accent'>
            MOTION
          </p>
        </div>
      </div>
      <div className='flex items-center justify-around'>
        <div className='relative text-[13vw] text-secondary'>
          <p className='font-tungstenNarrow uppercase leading-[0.8] transition-all duration-75 hover:text-accent'>
            HTML5 BANNER
          </p>
        </div>
        <div className='relative block h-[9.5vw] w-[35%] overflow-hidden rounded-lg'>
          <Image
            src='/assets/images/service_5.jpg'
            objectFit='cover'
            sizes=''
            alt='kol-next-service'
            layout='fill'
          />
        </div>
      </div>
    </div>
  )
}
