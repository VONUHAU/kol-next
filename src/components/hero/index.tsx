import React from 'react'

type Props = {}

export const Hero = (props: Props) => {
  return (
    <div className='max-h-100 w-full'>
      <div className='texts flex flex-col items-center justify-center gap-3 md:gap-5'>
        <p className='hero-text font-serif'>CREATING</p>
        <p className='hero-text font-serif'>BRAND</p>
        <p className='hero-text font-tungstenNarrow '>IMPOSSIBLE</p>
        <p className='md:6xl hero-text whitespace-nowrap font-serif'>
          TO IGNORE
        </p>
      </div>
      <div className='hero-small-text mt-10 flex items-center justify-center gap-4 whitespace-nowrap sm:gap-20'>
        <div className='md-text-xs flex flex-col items-center justify-center text-[8px] uppercase'>
          <span className='smallUpper'>Worldwide Design</span>
          <span className='swearLine'>USA, SA, Tokyo</span>
        </div>
        <div className='md-text-xs flex flex-col items-center justify-center text-[8px] uppercase'>
          <span className='smallUpper'>Branding and</span>
          <span className='swearLine'>Digital Design</span>
        </div>
      </div>
    </div>
  )
}
