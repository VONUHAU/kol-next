/* eslint-disable react/display-name */
'use client'
import React, { forwardRef, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import webCard from '../../../public/assets/images/webcard01.jpg'
import webCard2 from '../../../public/assets/images/webcard02.jpg'
import webCard3 from '../../../public/assets/images/webcard03.jpg'
import webCard4 from '../../../public/assets/images/webcard04.jpg'
import webCard5 from '../../../public/assets/images/webcard05.jpg'
import webCard6 from '../../../public/assets/images/webcard06.jpg'
import webCard7 from '../../../public/assets/images/webcard07.jpg'
import Image from 'next/image'

const webCards = [
  webCard6,
  webCard7,
  webCard,
  webCard2,
  webCard3,
  webCard4,
  webCard5,
]

gsap.registerPlugin(ScrollTrigger)
export const WeDraw = forwardRef((_props, imageRef) => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div ref={container} className='we-draw text-fill relative'>
      <div className='absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2'>
        {webCards.map((card, key) => (
          <div key={key}>
            <Image
              ref={(el) => (imageRef!.current[key] = el)}
              src={card}
              alt='kol-next-card'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 24vw'
              style={{
                transformOrigin: 'left top',
              }}
              className={`absolute left-1/2 top-1/2 m-auto w-[54vw]  -translate-x-1/2 -translate-y-1/2 opacity-0`}
            />
          </div>
        ))}
      </div>
    </div>
  )
})
