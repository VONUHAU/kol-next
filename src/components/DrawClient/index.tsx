'use client'
import React from 'react'
import { Clients } from './clients'
import { WeDraw } from './weDraw'

export const DrawClient = () => {
  return (
    <div className='relative py-5 font-tungstenNarrow sm:py-20'>
      <Clients />
      <WeDraw />
    </div>
  )
}
