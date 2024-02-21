import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import Gain from '../../public/assets/images/gain.jpg'
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

export const metadata: Metadata = {
  title: 'K0-NEXT',
  description: 'K0-NEXT-WEB3-EXPERIMENT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${tungsten.variable} ${oswald.className}`}>
      <body className={`${oswald.className} overflow-x-hidden px-8 pt-8`}>
        <div className='overlay fixed left-0 top-0 block h-full w-full opacity-30'>
          <Image
            src={Gain}
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
