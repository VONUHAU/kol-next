import React from 'react'
import webCard from '../../public/assets/images/webcard01.jpg'
import webCard2 from '../../public/assets/images/webcard02.jpg'
import webCard3 from '../../public/assets/images/webcard03.jpg'
import webCard4 from '../../public/assets/images/webcard04.jpg'
import webCard5 from '../../public/assets/images/webcard05.jpg'
import webCard6 from '../../public/assets/images/webcard06.jpg'
import webCard7 from '../../public/assets/images/webcard07.jpg'
import Image from 'next/image'
type Props = {}
const webCards = [
  webCard6,
  webCard7,
  webCard,
  webCard2,
  webCard3,
  webCard4,
  webCard5,
]
export const Draw = (props: Props) => {
  return (
    <div className='we-draw text-fill relative max-h-max w-full py-5 font-tungstenNarrow sm:py-20'>
      <div className=' text-center text-[26vw] uppercase leading-none text-accent sm:text-[20vw]'>
        <span className='text-accent'>W</span>
        <span className='text-accent'>E</span>
        <span className='text-accent'>D</span>
        <span className='text-accent'>R</span>
        <span className='text-accent'>A</span>
        <span className='text-accent'>W</span>
        <span className='text-accent'>.</span>
      </div>
      <div className='absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2'>
        {/* <div className='relative m-auto h-[25vw] w-[20vw]'>
          <Image
            src='/assets/images/webcard01.jpg'
            alt='kol-next-card'
            sizes='(max-width: 768px) 100vw, 60vw'
            fill
          />
        </div> */}
        {webCards.map((card, key) => (
          <Image
            key={key}
            src={card}
            alt='kol-next-card'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 24vw'
            style={{
              rotate: `${(webCards.length - key - 1) * -5}deg`,
              transformOrigin: 'left top',
            }}
            className={`absolute left-1/2 top-1/2 m-auto  w-[24vw] -translate-x-1/2 -translate-y-1/2`}
          />
        ))}
      </div>
    </div>
  )
}
