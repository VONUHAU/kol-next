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
export const Branding = (props: Props) => {
  return (
    <div className='branding text-fill relative max-h-max w-full py-5 font-tungstenNarrow sm:py-20'>
      <div className='flex items-center justify-between'>
        <div className='text-[24vw] uppercase text-secondary'>BRANDING</div>
      </div>
      <div className='flex items-center justify-between border-y-2 border-tertiary'>
        <div className='text-[24vw] uppercase text-secondary'>DIGITAL</div>
        <div className='text-[24vw] uppercase text-secondary'>DIGITAL</div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-[24vw] uppercase text-secondary'>STORYTELLING</div>
      </div>
    </div>
  )
}
