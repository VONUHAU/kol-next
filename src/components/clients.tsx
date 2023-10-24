import React from 'react'

type Props = {}

export const Clients = (props: Props) => {
  return (
    <div className='text-fill relative max-h-max w-screen py-5 font-tungstenNarrow sm:py-20'>
      <p className='text-center text-[32vw] uppercase leading-none text-accent sm:text-[20vw]'>
        CLIENTS:
      </p>
      <div className='clients absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-center'>
          <span className='text-[3vw] leading-[1]'>RIOT GAMES.</span>
          <span className='text-[3vw] leading-[1]'>
            Warner_logo WARNER BROS GAMES.
          </span>
          <span className='text-[3vw] leading-[1]'>MARVEL.</span>
          <span className='text-[3vw] leading-[1]'>HASBRO</span>
          <span className='text-[3vw] leading-[1]'>ROCKSTEADY.</span>
          <span className='text-[3vw] leading-[1]'>GUERRILLA GAMES</span>
          <span className='text-[3vw] leading-[1]'>DEEP SILVER.</span>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-[3vw] leading-[1]'>SANTA MONICA STUDIO.</span>
          <span className='text-[3vw] leading-[1]'>BEENOX.</span>
          <span className='text-[3vw] leading-[1]'>AVALANCHE STUDIOS.</span>
          <span className='text-[3vw] leading-[1]'>YAGER.</span>
          <span className='text-[3vw] leading-[1]'>RUMBLE.</span>
          <span className='text-[3vw] leading-[1]'>. DENA.</span>
          <span className='text-[3vw] leading-[1]'>. RELATED DESIGNS.</span>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-[3vw] leading-[1]'>MASSIVE ENTERTAINMENT.</span>
          <span className='text-[3vw] leading-[1]'>GAZILLION.</span>
          <span className='text-[3vw] leading-[1]'>SPARK.</span>
          <span className='text-[3vw] leading-[1]'>NINJA THEORY.</span>
          <span className='text-[3vw] leading-[1]'>
            PROSTHETIC RENAISSANCE.
          </span>
          <span className='text-[3vw] leading-[1]'>AERIA GAMES.</span>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-[3vw] leading-[1]'>LIONSGATE.</span>
          <span className='text-[3vw] leading-[1]'>KOCH MEDIA.</span>
          <span className='text-[3vw] leading-[1]'>KEEN.</span>
          <span className='text-[3vw] leading-[1]'>SIDESHOW COLLECTIBLES.</span>
          <span className='text-[3vw] leading-[1]'>METAL HAMMER.</span>
          <span className='text-[3vw] leading-[1]'>WIRED.</span>
        </div>
      </div>
    </div>
  )
}
