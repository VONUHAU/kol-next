import Gain from '../../public/assets/images/gain.jpg'
import Image from 'next/image'
const { SITE_NAME } = process.env
export default async function Header() {
  return (
    <header className='fixed z-[100] flex h-16 w-screen items-center justify-between'>
      <a href='' className=''>
        <svg
          width={28}
          height={24}
          xmlns='http://www.w3.org/2000/svg'
          className='header-hamburger-mobile'
          viewBox='0 0 32 24'
        >
          <g fill='none' stroke='#fff' stroke-width='2'>
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
      <div className='menu-mobile fixed left-0 top-0 hidden h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden bg-secondary sm:hidden'>
        <Image
          src={Gain}
          alt='gain'
          className='absolute z-[-1] h-screen w-full object-cover object-center opacity-30'
        />
        <div className='cursor-pointer font-tungstenNarrow text-3xl hover:text-accent'>
          {' '}
          HOME
        </div>
        <div className='cursor-pointer font-tungstenNarrow text-3xl hover:text-accent'>
          {' '}
          ABOUT
        </div>
        <div
          className='cursor-pointer text-3xl hover:text-accent'
          font-tungstenNarrow
        >
          PROJECT
        </div>
        <div className='cursor-pointer font-tungstenNarrow text-3xl hover:text-accent'>
          CONTACT
        </div>
      </div>
      <div className='menu relative hidden w-[120%] items-center justify-center gap-6 sm:flex'>
        <div className='cursor-pointer font-tungstenNarrow text-2xl hover:text-accent'>
          {' '}
          HOME
        </div>
        <div className='cursor-pointer font-tungstenNarrow text-2xl hover:text-accent'>
          {' '}
          ABOUT
        </div>
        <div className='cursor-pointer font-tungstenNarrow text-2xl hover:text-accent'>
          PROJECT
        </div>
        <div className='cursor-pointer font-tungstenNarrow text-2xl hover:text-accent'>
          CONTACT
        </div>
      </div>
      <a href='' className='invisible'>
        <svg
          width={28}
          height={24}
          xmlns='http://www.w3.org/2000/svg'
          className='header-hamburger-mobile'
          viewBox='0 0 32 24'
        >
          <g fill='none' stroke='#fff' stroke-width='2'>
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
