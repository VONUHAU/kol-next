import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/legacy/image'
import { Oswald } from 'next/font/google'
import Header from '@/components/header'
import Loading from './loading'
import { Footer } from '@/components/footer'
import './globals.css'
import { Suspense } from 'react'

const oswald = Oswald({
  variable: '--oswald',
  subsets: ['latin'],
  display: 'swap',
})

// Font files can be colocated inside of `app`
const tungsten = localFont({
  src: [
    {
      path: '../../public/assets/fonts/TungstenNarrow-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/TungstenNarrow-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/TungstenNarrow-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--tungsten',
  display: 'swap',
})

const rightGrotesk = localFont({
  src: [
    {
      path: '../../public/assets/fonts/RightGrotesk-CompactMedium.woff2',
      style: 'normal',
    },
  ],
  variable: '--grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KOdigital | We Build Engaging Digital Video Ads at Scale',
  description: 'We Build Engaging Digital Video Ads at Scale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${tungsten.variable} ${oswald.variable} ${rightGrotesk.variable}`}
    >
      <body
        className={`${oswald.variable} overflow-x-hidden px-3 pt-3 sm:px-8 sm:pt-8`}
      >
        <div className='overlay fixed left-0 top-0 block h-screen w-screen opacity-30'>
          <Image
            src={'/assets/images/gain.jpg'}
            layout='fill'
            alt='gain'
            className='h-full w-full object-cover object-center'
          />
        </div>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
