import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'KOdigital | Your Gateway to Digital Excellence',
  description:
    'KOdigital - Your gateway to digital excellence! Explore our services now.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${oswald.variable}`}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={`${oswald.variable} overflow-x-hidden pt-3 sm:pt-8`}>
        <div className='overlay pointer-events-none fixed left-0 top-0 block h-screen w-screen opacity-30'>
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
