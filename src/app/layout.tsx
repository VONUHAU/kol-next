import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Gain from '../../public/assets/images/gain.jpg'
import Header from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang='en' className={`${tungsten.variable} ${inter.className}`}>
      <body className={`${inter.className} overflow-x-hidden px-8 pt-8`}>
        <div className='overlay fixed left-0 top-0 block h-full w-full opacity-30'>
          <Image
            src={Gain}
            alt='gain'
            className='h-full w-full object-cover object-center'
          />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
