import React from 'react'
import webCard from '../../public/assets/images/webcard01.jpg'
import Image from 'next/image'
type Props = {}

export const Draw = (props: Props) => {
  return (
    <div className='we-draw text-fill relative max-h-max w-full py-5 font-tungstenNarrow sm:py-20'>
      <div className=' text-center text-[32vw] uppercase leading-none text-accent sm:text-[20vw]'>
        <span className='text-accent'>W</span>
        <span className='text-accent'>E</span>
        <span className='text-accent'>D</span>
        <span className='text-accent'>R</span>
        <span className='text-accent'>A</span>
        <span className='text-accent'>W</span>
        <span className='text-accent'>.</span>
      </div>
      <div className='absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2'>
        <div className='relative m-auto h-[25vw] w-[20vw]'>
          <Image
            src='/assets/images/webcard01.jpg'
            alt='kol-next-card'
            sizes='(min-width: 808px) 20vw, 60vw'
            fill
            className='h-auto '
          />
        </div>
      </div>
    </div>
  )
}
