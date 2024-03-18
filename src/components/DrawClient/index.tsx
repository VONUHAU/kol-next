'use client'
import React, { useRef } from 'react'
import { Clients } from './clients'
import { WeDrawIntro } from './weDrawIntro'

export const DrawClient = () => {
  return (
    <div className='relative py-5 font-tungstenNarrow sm:py-20'>
      <Clients />
    </div>
  )
}
