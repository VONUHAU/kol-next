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
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 fill-accent'
                  viewBox='0 0 50 50'
                >
                  <path d='M25.27,12.53c-6.58,0-11.94,5.36-11.94,11.94,0,2.41.71,4.73,2.06,6.71l.33.49-1.43,4.52,4.78-1.5.46.25c1.75.96,3.73,1.47,5.74,1.47,6.58,0,11.94-5.36,11.94-11.94s-5.36-11.94-11.94-11.94ZM31.81,30.41c-.7.67-1.68,1.2-2.94,1.03-3.07-.41-5.33-2.15-6.25-2.98-.93-.84-3.64-3.89-4.25-6.69-.27-1.22.28-2.21.98-2.92.88-.91,2.41-.6,2.91.56l.67,1.58c.25.59.13,1.28-.31,1.75l-.24.26c-.28.3-.33.74-.13,1.1.54.94,1.8,2.71,3.96,3.69.59.27,1.3.06,1.69-.47l.26-.35c.37-.51,1.05-.68,1.62-.41l1.51.71c1.23.57,1.52,2.21.54,3.14ZM38.79,0H11.21C5.04,0,0,5.04,0,11.21v27.59C0,44.96,5.04,50,11.21,50h27.59c6.16,0,11.21-5.04,11.21-11.21V11.21c0-6.16-5.04-11.21-11.21-11.21ZM25.27,38.85c-2.24,0-4.45-.52-6.44-1.52l-8.27,2.6,2.49-7.88c-1.41-2.27-2.16-4.88-2.16-7.58,0-7.93,6.45-14.38,14.38-14.38s14.38,6.45,14.38,14.38-6.45,14.38-14.38,14.38Z' />
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
                  viewBox='0 0 50 50'
                >
                  <path d='M38.79,0H11.21C5.04,0,0,5.04,0,11.21v27.59C0,44.96,5.04,50,11.21,50h27.59c6.16,0,11.21-5.04,11.21-11.21V11.21c0-6.16-5.04-11.21-11.21-11.21ZM32.51,14.7s-2.28-.02-3.63-.02-1.57,1.67-1.57,1.67v3.89h5.2l-.56,4.76h-4.65v14.89h-5.68v-14.89h-3.97v-4.76h3.97v-3.89c0-6.04,5.12-6.19,7.21-6.23,2.08-.04,3.67,0,3.67,0v4.59Z' />
                </svg>
              </a>

              <a
                href='https://www.linkedin.com/in/tran-oai-418b591a6'
                target='_blank'
                className='cursor-pointer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 fill-accent'
                  viewBox='0 0 50 50'
                >
                  <path d='M38.79,0H11.21C5.04,0,0,5.04,0,11.21v27.59C0,44.96,5.04,50,11.21,50h27.59c6.16,0,11.21-5.04,11.21-11.21V11.21c0-6.16-5.04-11.21-11.21-11.21ZM17.66,38.95h-6.03v-18.34h6.03v18.34ZM14.65,18.36c-1.84,0-3.34-1.49-3.34-3.34s1.49-3.34,3.34-3.34,3.34,1.49,3.34,3.34-1.49,3.34-3.34,3.34ZM38.69,29.25v9.69h-6.03v-9.69c0-3.37-1.56-3.97-2.79-3.97s-2.82.6-2.98,2.91v10.75h-6.03v-18.34h6.03v2.09c1.14-1.41,2.77-2.52,5.09-2.52,6.44,0,6.71,5.86,6.71,5.86v3.23Z' />
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
