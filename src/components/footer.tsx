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
    <footer className='footer overflow-hidden bg-black font-medium'>
      <div className='text-slider flex  font-tungstenNarrow text-[12vw]'>
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
        <span className='text-text leading-none'>
          KODIGITAL.FAMOUS.FOR.NOTHING.
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
            <div className='flex items-center gap-2 pb-[4px]'>
              <a
                href='https://wa.me/+84834243285'
                target='_blank'
                className='cursor-pointer'
              >
                <svg
                  className='w-6 fill-accent'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 14 14'
                >
                  <path d='M10.36,8s-1-.51-1.23-.58a.85.85,0,0,0-.24,0,.4.4,0,0,0-.34.2A5.63,5.63,0,0,1,8,8.23l0,0-.21-.09a5.36,5.36,0,0,1-2-1.81l0,0,.06-.07A1.63,1.63,0,0,0,6,6.06L6.05,6a1.08,1.08,0,0,0,.16-.26l0,0a.5.5,0,0,0,0-.45L5.72,4c-.11-.27-.25-.39-.46-.39H5.18a2.74,2.74,0,0,0-.84.22,1.78,1.78,0,0,0-.66,1.51,3.3,3.3,0,0,0,.7,1.8l0,0A6.7,6.7,0,0,0,7.26,9.66,4.54,4.54,0,0,0,9,10.1h.33a1.81,1.81,0,0,0,1.26-.89,1.44,1.44,0,0,0,.08-.93A.71.71,0,0,0,10.36,8Z' />
                  <path d='M7.12,0A6.82,6.82,0,0,0,1.19,10.28L0,13.76a.19.19,0,0,0,0,.19A.21.21,0,0,0,.18,14H.24l3.63-1.15a6.93,6.93,0,0,0,3.25.81A6.83,6.83,0,1,0,7.12,0Zm0,12.23a5.38,5.38,0,0,1-3-.9.19.19,0,0,0-.1,0H4l-1.82.58.59-1.73a.17.17,0,0,0,0-.17A5.4,5.4,0,0,1,7.12,1.42a5.41,5.41,0,1,1,0,10.81Z' />
                </svg>
              </a>
              <a
                target='_blank'
                className='cursor-pointer'
                href='https://www.facebook.com/trankhacoai'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 fill-accent'
                  viewBox='0 0 14 13.91'
                >
                  <path d='M14 7a7 7 0 1 0-8.09 6.91V9H4.13V7h1.78V5.46A2.47 2.47 0 0 1 8.1 2.74a3.38 3.38 0 0 1 .45 0 10.29 10.29 0 0 1 1.57.13V4.6h-.89a1 1 0 0 0-1.13.87 1.55 1.55 0 0 0 0 .22V7H10l-.28 2H8.09v4.89A7 7 0 0 0 14 7' />
                </svg>
              </a>

              <a
                href='https://www.linkedin.com/in/tr%E1%BA%A7n-oai-418b591a6/'
                target='_blank'
                className='cursor-pointer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 fill-accent'
                  viewBox='0 0 14 14'
                >
                  <path d='M12.86,0H1.22A1.09,1.09,0,0,0,.78.09,1.14,1.14,0,0,0,.4.32,1.36,1.36,0,0,0,.13.68,1.36,1.36,0,0,0,0,1.12V12.78a1.26,1.26,0,0,0,.36.84,1.28,1.28,0,0,0,.84.36H12.86a1.22,1.22,0,0,0,.8-.37,1.16,1.16,0,0,0,.31-.83V1.12a.89.89,0,0,0-.08-.43.88.88,0,0,0-.24-.36A1.05,1.05,0,0,0,13.29.1.93.93,0,0,0,12.86,0ZM4.38,11.66h-2V5.44h2Zm-1-7.16A1.16,1.16,0,0,1,3,4.43a1,1,0,0,1-.35-.24,1,1,0,0,1-.23-.35,1.14,1.14,0,0,1-.07-.41A1.16,1.16,0,0,1,2.42,3a.88.88,0,0,1,.24-.36A1,1,0,0,1,3,2.42a1.23,1.23,0,0,1,.42-.07,1,1,0,0,1,.42.08A1,1,0,0,1,4.43,3a1.16,1.16,0,0,1,.07.42,1.23,1.23,0,0,1-.07.42.92.92,0,0,1-.24.35,1,1,0,0,1-.35.23A1,1,0,0,1,3.42,4.5Zm8.24,7.16h-2V8.26c0-.81-.29-1.37-1-1.37a1.07,1.07,0,0,0-.62.2,1.17,1.17,0,0,0-.4.53,1.41,1.41,0,0,0-.07.5v3.54h-2V5.44h2v.87a2,2,0,0,1,1.84-1c1.31,0,2.31.87,2.31,2.73Z' />
                </svg>
              </a>
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
