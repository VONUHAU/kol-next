import Image from 'next/image'
import Header from '@/components/header'
import Gain from '../../public/assets/images/gain.jpg'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'
export default function Home() {
  return (
    <>
      <div className='overlay fixed left-0 top-0 block h-full w-full opacity-30'>
        <Image
          src={Gain}
          alt='gain'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <Header />
      <main className='relative top-16 mt-5 min-h-screen'>
        <Hero />
        <Video />
      </main>
    </>
  )
}
