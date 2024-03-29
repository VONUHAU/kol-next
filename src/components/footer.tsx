'use client'
import React, { useEffect, useState } from 'react'
export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const handleBackToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })
  }
  return (
    <footer className='footer -mx-8  bg-black font-medium'>
      <div className='text-slider flex font-tungstenNarrow text-[12vw]'>
        <span className='text-text leading-none'>
          KODIGITAL.FAMOUS.FOR.NOTHING.
        </span>
        <span className='leading-none text-accent'>
          KODIGITAL.FAMOUS.FOR.NOTHING
        </span>
        <span className='text-text leading-none'>
          KODIGITAL.FAMOUS.FOR.NOTHING.
        </span>
        <span className='leading-none text-accent'>
          KODIGITAL.FAMOUS.FOR.NOTHING
        </span>
        <span className='text-text leading-none'>
          KODIGITAL.FAMOUS.FOR.NOTHING.
        </span>
      </div>
      <div className='border-text flex flex-col items-start justify-start border-b-4 border-t-8 px-2 pt-4 md:flex-row md:items-start md:justify-around  md:py-4'>
        <div className='px-4 pb-3'>
          <span> KODIGITAL STUDIO</span>
          <br />
          <span>GENERAL INQUIRIES:</span>
          <a href='mailto:trankhacoai96@gmail.com'>
            <p className='uppercase text-white'>trankhacoai96@gmail.com</p>
          </a>
        </div>

        <div className='flex w-full flex-row items-end justify-between gap-6 border-t border-white px-4 py-3 md:w-auto md:border-0 md:py-0'>
          <div>
            <div className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 fill-accent'
                viewBox='0 0 14 14'
              >
                <path d='M7 0a7 7 0 1 0 7 7 7 7 0 0 0-7-7m3.52 5.67v.22a4.78 4.78 0 0 1-4.74 4.8h-.06a4.75 4.75 0 0 1-2.59-.76 2.69 2.69 0 0 0 .4 0 3.41 3.41 0 0 0 2.1-.73 1.68 1.68 0 0 1-1.58-1.14h.32A1.74 1.74 0 0 0 4.82 8a1.68 1.68 0 0 1-1.36-1.62 1.74 1.74 0 0 0 .77.21 1.68 1.68 0 0 1-.75-1.41 1.55 1.55 0 0 1 .22-.84 4.81 4.81 0 0 0 3.48 1.74 1.69 1.69 0 0 1 2.88-1.54 3.17 3.17 0 0 0 1.07-.41 1.77 1.77 0 0 1-.74.94 3.34 3.34 0 0 0 1-.27 3.31 3.31 0 0 1-.84.87' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 fill-accent'
                viewBox='0 0 14 13.91'
              >
                <path d='M14 7a7 7 0 1 0-8.09 6.91V9H4.13V7h1.78V5.46A2.47 2.47 0 0 1 8.1 2.74a3.38 3.38 0 0 1 .45 0 10.29 10.29 0 0 1 1.57.13V4.6h-.89a1 1 0 0 0-1.13.87 1.55 1.55 0 0 0 0 .22V7H10l-.28 2H8.09v4.89A7 7 0 0 0 14 7' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6  fill-accent'
                viewBox='0 0 14 14'
              >
                <path d='M6.5 5.36A1.71 1.71 0 1 1 5.36 7.5 1.7 1.7 0 0 1 6.5 5.36' />

                <path d='M11 4a1.7 1.7 0 0 0-1-1 2.77 2.77 0 0 0-.95-.19H4.89A2.87 2.87 0 0 0 4 3a1.72 1.72 0 0 0-1 1 2.82 2.82 0 0 0-.18 1v4.16A2.64 2.64 0 0 0 3 10a1.7 1.7 0 0 0 1 1 2.83 2.83 0 0 0 1 .19h4.16A2.87 2.87 0 0 0 10 11a1.7 1.7 0 0 0 1-1 2.83 2.83 0 0 0 .19-1V4.84A2.88 2.88 0 0 0 11 4M7 9.64A2.64 2.64 0 1 1 9.64 7 2.65 2.65 0 0 1 7 9.64m2.75-4.77a.62.62 0 0 1 0-1.24.61.61 0 0 1 .61.62.61.61 0 0 1-.61.62' />

                <path d='M10.91 0H3.09A3.09 3.09 0 0 0 0 3.09v7.82A3.09 3.09 0 0 0 3.09 14h7.82A3.09 3.09 0 0 0 14 10.91V3.09A3.09 3.09 0 0 0 10.91 0m1.2 9.12a3.8 3.8 0 0 1-.24 1.25 2.64 2.64 0 0 1-1.51 1.51 3.79 3.79 0 0 1-1.24.24H4.87a3.8 3.8 0 0 1-1.25-.24 2.45 2.45 0 0 1-.91-.6 2.49 2.49 0 0 1-.6-.91 3.85 3.85 0 0 1-.24-1.25V4.88a3.8 3.8 0 0 1 .24-1.25 2.45 2.45 0 0 1 .6-.91 2.37 2.37 0 0 1 .91-.6 3.6 3.6 0 0 1 1.25-.24h4.24a3.8 3.8 0 0 1 1.25.24 2.45 2.45 0 0 1 .91.6 2.37 2.37 0 0 1 .6.91 3.6 3.6 0 0 1 .24 1.25v4.24Z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6  fill-accent'
                viewBox='0 0 14 9.81'
              >
                <path d='M13.71 1.53A1.77 1.77 0 0 0 12.47.3 41.69 41.69 0 0 0 7 0a41.69 41.69 0 0 0-5.47.3A1.75 1.75 0 0 0 .29 1.53 18.12 18.12 0 0 0 0 4.9a18.12 18.12 0 0 0 .29 3.37 1.75 1.75 0 0 0 1.24 1.24A40 40 0 0 0 7 9.8a40 40 0 0 0 5.47-.29 1.75 1.75 0 0 0 1.24-1.24A18.12 18.12 0 0 0 14 4.9a18.12 18.12 0 0 0-.29-3.37M5.6 7V2.8l3.64 2.1Z' />
              </svg>
            </div>
            <span>IMPRINT</span>
            <br />
            <span>COPYRIGHT © 2024 — KOdigital</span>
          </div>
          <div className='block md:hidden'>
            <span>Website by</span> <br />
            <span className='text-accent'>KGECK</span>
          </div>
        </div>
        <div className='hidden px-4 md:block'>
          <span>Website by</span> <br />
          <span className='text-accent'>KGECK</span>
        </div>
      </div>
      <div
        onClick={handleBackToTop}
        className={`${
          isVisible ? 'opacity-1' : 'opacity-0'
        } back-to-header group fixed left-[85%] top-[95%] flex h-[clamp(24px,2.2vw,2.2vw)] w-[clamp(24px,2.2vw,2.2vw)] cursor-pointer items-center justify-center rounded-full border border-solid border-accent sm:left-[95%] sm:top-[92%] `}
      >
        <div className='relative'>
          <svg
            className={`-translate-y-[5%] fill-secondary transition-all group-hover:-translate-y-[25%] group-hover:fill-accent`}
            width='clamp(13px,1.2vw,1.2vw)'
            height='clamp(14px,1.2vw,1.2vw)'
            viewBox='0 0 852 491'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M18.7383 471.282C30.7401 483.28 47.0158 490.021 63.9863 490.021C80.9568 490.021 97.2326 483.28 109.234 471.282L426.034 154.482L742.834 471.282C754.905 482.94 771.071 489.391 787.852 489.245C804.633 489.1 820.685 482.369 832.551 470.503C844.417 458.637 851.148 442.585 851.293 425.804C851.439 409.023 844.988 392.857 833.33 380.786L471.282 18.7383C459.281 6.74018 443.005 0 426.034 0C409.064 0 392.788 6.74018 380.786 18.7383L18.7383 380.786C6.74019 392.788 0 409.064 0 426.034C0 443.005 6.74019 459.281 18.7383 471.282Z' />
          </svg>
        </div>
      </div>
    </footer>
  )
}
