import React from 'react'
import { Popup } from '@/components/brand'
import Image from 'next/image'

export const Contact = () => {
  return (
    <section className='relative -mx-8 mb-12'>
      {[...Array(3)].map((key) => (
        <Popup
          key={key}
          sentence={
            <div className='flex items-center gap-1'>
              <svg width='20' height='23' viewBox='0 0 70 61'>
                <path
                  d='M65.5483 0.000377628L1.76836 32.1147L26.7911 37.5532L36.3109 58.0128L65.5483 0.000377628Z'
                  fill='#252F30'
                />
              </svg>
              <p className='font-tungstenNarrow text-2xl text-primary underline decoration-primary underline-offset-2'>
                khacoaigmail.com
              </p>
            </div>
          }
          left={`${Math.random() * 10 * 6}%`}
          top={`${Math.random() * 10 * 6}%`}
          style={{ zIndex: 99, cursor: 'pointer' }}
        />
      ))}

      <div className='text-center font-tungstenNarrow text-5xl leading-none text-secondary sm:text-[14vw]'>
        Want to
      </div>
      <div className='item-center flex justify-between'>
        <div className='pointer-events-none relative h-[20vw] w-[49vw]'>
          <Image
            src='/assets/images/left-hand.webp'
            alt='kol-next-connect'
            fill
          />
        </div>
        <div className='pointer-events-none relative h-[20vw] w-[49vw]'>
          <Image
            src='/assets/images/right-hand.webp'
            alt='kol-next-connect'
            fill
          />
        </div>
      </div>

      <div className='text-center font-tungstenNarrow text-5xl leading-none text-accent  sm:text-[14vw]'>
        Reach out?
      </div>
    </section>
  )
}
