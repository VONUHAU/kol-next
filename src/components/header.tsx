/* eslint-disable @next/next/no-async-client-component */
'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/legacy/image'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const container = useRef<HTMLDivElement>(null)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const tl = useRef<GSAPTimeline>()
  const { contextSafe } = useGSAP({
    scope: container,
  })
  useEffect(() => {
    tl.current?.restart()
    setOpenMenu(false)
  }, [pathname, searchParams])

  const handleOpenMenu = contextSafe(() => {
    const state = !isOpenMenu
    setOpenMenu(state)
    const openTimeline = gsap.timeline({ paused: true })
    tl.current = gsap.timeline({ paused: true })
    openTimeline
      .to('.bar-top', { top: '50%', duration: 0.04 })
      .to('.bar-mid', { opacity: 0, duration: 0.04 }, '<0')
      .to('.bar-bottom', { top: '50%', duration: 0.04 }, '<0')
      .to('.bar-top', {
        rotate: -45,
        transformOrigin: 'center center',
        duration: 0.1,
      })
      .to(
        '.bar-bottom',
        { rotate: 45, transformOrigin: 'center center', duration: 0.1 },
        '<0'
      )

    tl.current
      .to('.bar-top', {
        rotate: 0,
        transformOrigin: 'center center',
        duration: 0.05,
      })
      .to(
        '.bar-bottom',
        { rotate: 0, transformOrigin: 'center center', duration: 0.05 },
        '<0'
      )
      .to('.bar-bottom', { top: '100%', duration: 0.1 })
      .to('.bar-mid', { opacity: 1, duration: 0.1 }, '<0')
      .to('.bar-top', { top: '0%', duration: 0.1 }, '<0')

    state ? openTimeline.restart() : tl.current.restart()
  })
  return (
    <header
      ref={container}
      className={`fixed z-[100] flex h-14 w-screen items-center justify-between sm:h-16`}
    >
      <a href='' className='z-[100] w-[clamp(64px,8vw,8vw)] fill-white'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 145'>
          <defs></defs>
          <g>
            <path d='m68.2,125.1h-31l-7.2-50.9v50.9H0V1.8h30v52.5L38.5,1.8h30.1l-11.5,59.5,11.1,63.8Z' />
            <path d='m135,27.1v72.6c0,17.6-8.8,26.4-26.4,26.4h-14.1c-17.6,0-26.4-8.8-26.4-26.4V27.1c-.1-17.6,8.7-26.4,26.4-26.4h14.1c17.6,0,26.4,8.8,26.4,26.4Zm-30,72.1V27.7c0-1.5-.8-2.3-2.3-2.3h-2.5c-1.5,0-2.3.8-2.3,2.3v71.5c0,1.5.8,2.3,2.3,2.3h2.5c1.6,0,2.3-.8,2.3-2.3Z' />
          </g>
          <path d='m182.4,0v125.1h-6.5v-7c-6.6,5.3-12.6,7.9-18.2,7.9h-.9c-10.6,0-15.9-5.2-15.9-15.7V45.8c0-10.5,5.3-15.7,15.9-15.7h.9c5.4,0,11.5,2.6,18.2,7.8V0h6.5Zm-6.6,111.9V44.6c-6.7-5.4-12.2-8.1-16.4-8.1h-.9c-7.4,0-11.1,3.3-11.1,10v63.1c0,6.7,3.7,10,11.1,10h.9c4.5.1,10-2.5,16.4-7.7Z' />
          <path d='m199.8,18.2V6.3h7v11.8h-7v.1Zm.2,106.9V31h6.7v94.1h-6.7Z' />
          <path d='m264.7,31v97.1c0,11.3-5.9,16.9-17.8,16.9h-5.6c-11.5,0-17.3-5.3-17.3-16v-3.5h6.2v3.3c0,6.9,3.8,10.4,11.3,10.4h5.6c7.3,0,10.9-3.5,10.9-10.4v-19c-6.3,5.1-12.3,7.6-17.8,7.6h-.9c-10.6,0-15.9-5.2-15.9-15.7v-55.9c0-10.5,5.3-15.7,15.9-15.7h.9c6,0,11.9,2.6,17.8,7.8v-6.9h6.7Zm-6.7,73v-59.8c-6.2-5.2-11.6-7.8-16-7.8h-1c-7.4,0-11.1,3.3-11.1,10v54.3c0,6.8,3.7,10.2,11.1,10.2h.9c4.7.1,10.1-2.2,16.1-6.9Z' />
          <path d='m281.8,18.2V6.3h7v11.8h-7v.1Zm.1,106.9V31h6.7v94.1h-6.7Z' />
          <path d='m315.9,37.2v87.9h-6.7V37.2h-7.4v-6.2h7.4v-15.8h6.7v15.8h12.3v6.2h-12.3Z' />
          <path d='m336,111v-17.4c0-5.1,1-8.9,3.1-11.6s5.7-5.1,10.8-7l19.4-7.4v-19.5c0-7.8-4.1-11.6-12.2-11.6h-1.2c-8.3,0-12.5,3.9-12.5,11.6v12.5h-6.5v-12.3c0-12.1,6.3-18.2,19-18.2h1.4c12.5,0,18.7,6.1,18.7,18.2v76.8h-6.7v-6.7c-6.6,5.1-12.5,7.6-17.8,7.6h-.5c-10,0-15-5-15-15Zm16.8,8.7h.5c4.2,0,9.6-2.2,16-6.7v-39.3l-16.7,6.7c-3.8,1.5-6.3,3.2-7.8,5.1-1.4,1.9-2.1,4.6-2.1,8.3v16.2c0,6.4,3.4,9.7,10.1,9.7Z' />
          <path d='m393.3,125.1V0h6.7v125.1h-6.7Z' />
        </svg>
      </a>
      <div
        onClick={handleOpenMenu}
        className={`menu-icon round absolute left-[86%] z-[100] flex h-4 w-8 cursor-pointer flex-col items-center justify-around sm:hidden`}
      >
        <div className='bars relative h-full w-full'>
          <div className='bar-top absolute left-0 top-[0%] h-[25%] w-full -translate-y-1/2 rounded-full bg-accent'></div>
          <div className='bar-mid absolute left-0 top-[50%] h-[25%] w-full -translate-y-1/2 rounded-full bg-accent'></div>
          <div className='bar-bottom absolute left-0 top-[100%] h-[25%] w-full -translate-y-1/2 rounded-full bg-accent'></div>
        </div>
      </div>
      <div
        className={`menu-mobile  fixed left-0 top-0 ${
          isOpenMenu ? 'max-h-[100vh]' : 'max-h-[0]'
        }  h-screen w-screen flex-col  items-center justify-center gap-12 overflow-hidden bg-secondary transition-all duration-300 sm:hidden`}
      >
        <div className='pointer-events-none'>
          <Image
            src={'/assets/images/gain.jpg'}
            layout='fill'
            alt='gain'
            className={`absolute z-[-1] h-screen w-full object-cover object-center opacity-30`}
          />
        </div>

        <div className='flex h-screen w-screen flex-col items-center justify-center space-y-10'>
          <Link href='/'>
            <div
              className={`${
                pathname === '/' ? 'text-accent' : 'text-white'
              }cursor-pointer font-tungstenNarrow text-6xl hover:text-accent`}
            >
              HOME
            </div>
          </Link>

          <Link href='/about'>
            <div
              className={`${
                pathname === '/about' ? 'text-accent' : 'text-white'
              }cursor-pointer font-tungstenNarrow text-6xl hover:text-accent`}
            >
              ABOUT
            </div>
          </Link>

          <Link href='/projects'>
            <div
              className={`${
                pathname === '/projects' ? 'text-accent' : 'text-white'
              }cursor-pointer font-tungstenNarrow text-6xl hover:text-accent`}
            >
              PROJECTS
            </div>
          </Link>
        </div>
      </div>
      <div className='menu relative hidden w-[120%] items-center justify-center gap-6 sm:flex'>
        <Link href='/'>
          <div
            className={` ${
              pathname === '/' ? 'text-accent' : 'text-white'
            } cursor-pointer font-tungstenNarrow text-2xl hover:text-accent`}
          >
            HOME
          </div>
        </Link>

        <Link href='/about'>
          <div
            className={` ${
              pathname === '/about' ? 'text-accent' : 'text-white'
            } cursor-pointer font-tungstenNarrow text-2xl hover:text-accent`}
          >
            ABOUT
          </div>
        </Link>

        <Link href='/projects'>
          <div
            className={` ${
              pathname === '/projects' ? 'text-accent' : 'text-white'
            } cursor-pointer font-tungstenNarrow text-2xl hover:text-accent`}
          >
            PROJECTS
          </div>
        </Link>
      </div>
      <a href='' className='invisible'>
        <svg
          width={28}
          height={24}
          xmlns='http://www.w3.org/2000/svg'
          className='header-hamburger-mobile'
          viewBox='0 0 32 24'
        >
          <g fill='none' stroke='#fff' strokeWidth='2'>
            <path d='M31 0v23.5' data-name='Linie 44' />
            <g data-name='Gruppe 45'>
              <path d='M3 0v24' data-name='Pfad 17' />
              <path d='M9 0v23.5' data-name='Linie 41' />
              <path d='M15 0v23.5' data-name='Linie 42' />
              <path d='M21 0v23.5' data-name='Linie 43' />
              <path d='M0 11.75h24' data-name='Linie 45' />
            </g>
          </g>
        </svg>
      </a>
    </header>
  )
}
