import React from 'react'

type Props = {}

export const Video = (props: Props) => {
  return (
    <>
      <div className='video-section -mx-8 my-8 sm:my-24'>
        <video autoPlay loop muted>
          <source
            src='https://a.storyblok.com/f/150329/x/28eda8d691/smv_intro_cc35.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='text-fill px -ml-4 font-tungstenNarrow sm:ml-0 sm:px-12'>
        <div className='flex w-full flex-col gap-1 md:flex-row md:gap-20'>
          <span className='text-lg sm:text-xl md:text-[2vw]'>CHINASKI:</span>
          <p className='text-[9vw] leading-none sm:text-[7vw]'>
            <span className='block'>I’M GONNA ASK YOU THE SAME</span>
            <span className='block'>DAMN THING PEOPLE ARE ALWAYS.</span>
            <span className='block'>ASKING ME.</span>
          </p>
        </div>
        <div className='flex w-full flex-col items-end justify-end gap-1 text-accent md:flex-row md:items-start md:gap-10'>
          <span className='text-lg sm:text-xl md:text-[2vw]'>:SMV</span>
          <p className='text-[9vw] leading-none sm:text-[7vw]'>
            <span>LIKE?</span>
          </p>
        </div>
        <div className='flex w-full flex-col gap-1 md:flex-row md:gap-20'>
          <span className='text-lg sm:text-xl md:text-[2vw]'>CHINASKI:</span>
          <p className='text-[9vw] leading-none sm:text-[7vw]'>
            <span>LIKE WHAT YOU DO?</span>
          </p>
        </div>
      </div>
    </>
  )
}
