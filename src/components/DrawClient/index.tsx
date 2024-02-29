'use client'
import React, { useRef } from 'react'
import { Clients } from './clients'
import { WeDrawIntro } from './weDrawIntro'
import { WeDraw } from './weDraw'
type Props = {}

export const DrawClient = (props: Props) => {
  const clientRef = useRef<HTMLDivElement>(null)
  const weDrawIntroRef = useRef<HTMLDivElement>(null)
  const weDrawRef = useRef<HTMLDivElement>(null)
  return (
    <div className='py-5 font-tungstenNarrow sm:py-20'>
      <Clients ref={weDrawIntroRef} />
      <WeDrawIntro />
    </div>
  )
}
