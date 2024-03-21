'use client'
import Image from 'next/legacy/image'
import { Major } from './_major'

type Job = {
  year: number | string
  jobTitle: string
  companyName: string
}

const experiences = [
  {
    year: 'Now',
    jobTitle: 'Motion Designer',
    companyName: 'unknow.com',
  },
  {
    year: '2020',
    jobTitle: 'Motion Designer',
    companyName: 'unknow.com',
  },
  {
    year: '2018',
    jobTitle: 'Motion Designer',
    companyName: 'unknow.com',
  },
  {
    year: '2016',
    jobTitle: 'Motion Designer',
    companyName: 'unknow.com',
  },
]
export const JobBar = ({ year, jobTitle, companyName }: Job) => {
  return (
    <div className='flex cursor-pointer gap-6 border-b border-secondary bg-black px-6 py-6 text-[clamp(32px,7vw,7vw)] leading-[0.9] text-secondary transition-all duration-300 last:border-0 hover:bg-accent hover:text-black sm:px-16 md:gap-36'>
      <p>{year}</p>
      <div>
        <p className=''>{jobTitle}</p>
        <p className='text-[clamp(16px,2vw,2vw)]'>{companyName}</p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className='relative mt-28 min-h-screen '>
      <div
        className='relative -mx-8 flex items-center justify-center p-16
      before:absolute before:inset-0 before:z-[-1] before:block before:h-full before:w-full
      before:bg-[url("/assets/images/about/hh_left.png")] before:bg-cover before:bg-center
      before:opacity-20 '
      >
        <div className='item-center z-[20] flex justify-center'>
          <div className='good peer text-center font-tungstenNarrow text-[clamp(48px,10vw,10vw)] leading-[0.8] hover:hidden'>
            <p>MAKING</p>
            <p className='text-accent'>GOOD</p>
            <p className='text-accent'>SHIT</p>
            <p>SINCE</p>
            <p>2016</p>
          </div>
          <div className='hidden text-center font-tungstenNarrow text-[clamp(48px,10vw,10vw)] leading-[0.8] peer-hover:block'>
            <p>HIDING</p>
            <p className='text-accent'>BAD</p>
            <p className='text-accent'>SHIT</p>
            <p>SINCE</p>
            <p>2016</p>
          </div>
        </div>
      </div>

      <div className='space-y-8 font-tungsten text-secondary sm:space-y-14 sm:px-4 md:px-12 lg:space-y-24 lg:px-24'>
        <div className='relative my-4 sm:my-4 md:my-12 lg:my-24'>
          <div className='text-[clamp(20px,3vw,3vw)] font-medium'>
            <p>About me</p>
          </div>
          <div className='text-[clamp(32px,7vw,7vw)] font-medium leading-none'>
            I'm a <span className='text-accent'>selectively skilled </span>
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </div>
          <div className='absolute bottom-0 right-0 -z-[1] h-[clamp(110px,21vw,21vw)] w-[clamp(100px,20vw,20vw)]'>
            <Image
              src='/assets/images/about/globe.png'
              alt='global'
              layout='fill'
            />
          </div>
        </div>
        <Major />
        <div
          className='pattern relative  flex w-full items-center gap-4 overflow-hidden rounded-xl
          border-4 border-secondary bg-black font-tungstenNarrow text-[clamp(48px,10vw,10vw)] text-white md:rounded-3xl'
        >
          <p className='z-10 text-accent'>CREATIVE.</p>
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
        </div>
        <div className='my-8'>
          <div className='text-[clamp(20px,3vw,3vw)]'>
            <p>Experience</p>
          </div>
          <div className='text-[clamp(32px,7vw,7vw)] font-[400] leading-none'>
            Over <span className='text-accent'>a decade</span> product designer
            with strong focus on producing high quality &impactful digital
            experience.
          </div>
          <div className='relative'>
            <Image
              src='/assets/images/about/globe.png'
              alt='global'
              layout='fill'
            />
          </div>
        </div>
        <div>
          {experiences.map((experience, key) => (
            <JobBar key={key} {...experience} />
          ))}
        </div>
      </div>
      <div
        className='relative -mx-8 mt-24 flex h-[50vw] items-center justify-center before:absolute
        before:inset-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[url("/assets/images/about/let_connect.jpg")] 
        before:bg-cover
        before:bg-center before:opacity-40 after:absolute 
        after:inset-0 after:z-[-1] after:block after:h-full after:w-full after:bg-black after:opacity-80 sm:h-[40vw]'
      >
        <div className='item-center flex-col justify-center'>
          <p className='text-center font-tungsten text-[clamp(24px,5vw,5vw)] font-medium'>
            Got a project in mind?
          </p>
          <p className='font-tungstenNarrow text-[clamp(48px,10vw,10vw)] text-accent'>
            LET&apos;S CONNECT
          </p>
        </div>
        <div
          className='absolute left-[8%] top-[14%] flex h-[clamp(42px,8vw,8vw)] w-[clamp(42px,8vw,8vw)] items-center justify-center
        rounded-full border-2 border-white font-tungsten font-medium sm:left-[22%] sm:border-4'
        >
          <p className='text-[clamp(18px,3vw,3vw)]'>Linkin</p>
        </div>
        <div
          className='absolute left-[26%] top-[60%] flex h-[clamp(48px,8vw,8vw)] w-[clamp(48px,8vw,8vw)] items-center
        justify-center rounded-full border-2 border-white font-tungsten font-medium sm:border-4'
        >
          <p className='text-[clamp(18px,3vw,3vw)]'>Whatapp</p>
        </div>
        <div
          className='absolute left-[68%] top-[36%] flex h-[clamp(54px,9vw,9vw)] w-[clamp(54px,9vw,9vw)] items-center
        justify-center rounded-full border-2 border-white font-tungsten font-medium sm:border-4'
        >
          <p className='text-[clamp(18px,3vw,3vw)]'>Instagram</p>
        </div>
      </div>
    </main>
  )
}
