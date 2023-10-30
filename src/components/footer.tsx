import React from 'react'

export const Footer = () => {
  return (
    <div className='footer -mx-8 -my-4 bg-black font-medium '>
      <div className='text-slider flex font-tungstenNarrow text-[12vw]'>
        <span className='text-text'>SIXMOREVODKA.FAMOUS.FOR.NOTHING.</span>
        <span className='text-accent'>SSIXMOREVODKA.FAMOUS.FOR.NOTHING</span>
        <span className='text-text'>SIXMOREVODKA.FAMOUS.FOR.NOTHING.</span>
        <span className='text-accent'>SSIXMOREVODKA.FAMOUS.FOR.NOTHING</span>
        <span className='text-text'>SIXMOREVODKA.FAMOUS.FOR.NOTHING.</span>
      </div>
      <div className='border-text flex flex-col items-start justify-start border-b-4 border-t-8 px-2 pt-4 md:flex-row md:items-center md:justify-between md:p-0 md:py-4'>
        <div className='pb-3'>
          <span>SIXMOREVODKA STUDIO</span>
          <br />
          <span>GENERAL INQUIRIES:</span>
          <br />
          <span className='text-accent'>INFO@SIXMOREVODKA.COM</span>
        </div>
        <div className='w-full border-t border-white py-3 md:w-auto md:border-0 md:py-0'>
          <span className='text-accent'>SIXMOREVODKA STUDIO GMBH</span>
          <br />
          <span>BOXHAGENER STRASSE 16</span>
          <br />
          <span>10245 BERLIN, GERMANY</span>
          <br />
          <span>PHONE: +49 (0) 30 / 7623103</span>
        </div>
        <div className=' flex w-full flex-row items-end justify-between gap-6 border-t border-white py-3 md:w-auto md:border-0 md:py-0'>
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
            <span>COPYRIGHT © 2022 — SMV</span>
          </div>
          <div>
            <span>Website by</span> <br />
            <span className='text-accent'>kgeck</span>
          </div>
        </div>
      </div>
      <div className='back-to-header group relative mb-4 overflow-hidden'>
        <div className='absolute inset-0 translate-y-full bg-accent transition-all group-hover:translate-y-0'></div>
        <div className='relative z-50 m-auto w-[clamp(30px,4%,50px)] py-2.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 71 104'
            className='back-to-header-icon cursor-pointer fill-white'
          >
            <path d='M70.11,40.69,35.25,0,.39,40.69H19.47V103.5H51V40.69Z' />
          </svg>
        </div>
      </div>
    </div>
  )
}
