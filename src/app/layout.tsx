import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden p-8`}>
        {children}
      </body>
    </html>
  )
}
