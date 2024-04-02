'use client'
import { Suspense, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/legacy/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Major } from './_major'
import AboutMe from './_aboutMe'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    year: 'Dec 2020 - Apr 2024',
    jobTitle: 'Motion Graphic Designer',
    companyName: 'Shuttlerock',
    desc: 'Created thousands of dynamic motion videos and images for diverse advertising campaigns across platforms like Facebook, Instagram, Google, YouTube, TikTok, Hulu, Amazon, X (Twitter), and Pinterest.',
  },
  {
    year: 'Mar 2020 - Present',
    jobTitle: 'Freelance Graphic Designer',
    companyName: 'Lead Like Jesus',
    desc: 'Design and oversee production of various printing products.',
  },
  {
    year: 'Oct 2019 - Mar 2020',
    jobTitle: 'Motion Designer',
    companyName: 'Plasma Khang Viet',
    desc: `Designed a wide range of print materials (banners, posters, flyers, brochures, catalogs, coupons).
          Managed social media presence, including hashtag campaigns and fan page engagement.
          Executed video production tasks as a cameraman and editor.`,
  },
  {
    year: 'Jun-Aug 2020',
    jobTitle: 'Background Artist',
    companyName: 'SUNRISE MEDIA - Entertainment',
    desc: 'Contributed to the animated series "Qua Tang Cuoc Song".',
  },
  {
    year: 'Oct 2018 - Dec 2018',
    jobTitle: 'Freelance Graphic Designer',
    companyName: '',
    desc: 'Designed engaging educational products for children, focusing on alphabet and image descriptions.',
  },
]
export const JobBar = ({ year, jobTitle, companyName, desc }) => {
  return (
    <Suspense>
      <div className='job-bar group relative flex cursor-pointer border-b border-secondary bg-black px-6 py-8 leading-[0.9] text-secondary last:border-0 sm:px-16 '>
        <p className='w-[35%] text-[clamp(24px,4vw,4vw)]'>{year}</p>
        <div className='job-title w-[65%]'>
          <p className='text-[clamp(32px,6vw,6vw)]'>{jobTitle}</p>
          <p className='text-[clamp(16px,2vw,2vw)]'>{companyName}</p>
        </div>
        <div className='job-desc absolute left-0 top-0 flex h-full w-full items-center justify-start overflow-hidden bg-accent px-4 md:px-8'>
          <p className='font-grotesk text-[clamp(16px,2vw,2vw)] text-white'>
            {desc}
          </p>
        </div>
      </div>
    </Suspense>
  )
}
export default function Home() {
  const pathname = usePathname()
  const container = useRef()
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: 'top center',
          },
        })
        .from('.gpim', {
          yPercent: -20,
        })
        .from('.let-connect', { yPercent: 20 }, '<0')
        .from(
          '.in-icon, .wa-icon',
          {
            xPercent: -40,
          },
          '<0'
        )
        .from(
          '.fb-icon',
          {
            xPercent: 40,
          },
          '<0'
        )
    },
    { scope: container }
  )
  useEffect(() => {
    if (pathname == '/about') {
      document.body.style.overflowY = 'auto'
    }
  }, [pathname])

  return (
    <main className='relative mt-4 min-h-screen sm:mt-12'>
      <div
        className='relative flex h-[clamp(200px,60vw,60vw)] items-center justify-center
      p-16 before:absolute before:inset-0 before:z-[-1] before:block before:h-full
      before:w-full before:bg-[url("/assets/images/about/Web_portrait.webp")] before:bg-cover
      before:bg-top before:opacity-90'
      ></div>

      <div className='space-y-8 px-3 font-tungsten text-secondary sm:space-y-14 sm:px-4 sm:px-8 md:px-12 lg:space-y-24 lg:px-24'>
        <AboutMe />
        <Major />
        <div
          className='pattern relative  overflow-hidden rounded-xl
          border-4 border-secondary bg-black font-tungstenNarrow text-[clamp(48px,10vw,10vw)] text-white md:rounded-3xl'
        >
          <div className='creative-slider flex w-full items-center gap-4'>
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
        </div>
        <div className='my-8'>
          <div className='text-[clamp(20px,3vw,3vw)]'>
            <p>Experience</p>
          </div>
          <div className='text-[clamp(32px,7vw,7vw)] font-[400] leading-none'>
            With <span className='text-accent'>5+ years</span> of experience,
            I&apos;ve created a library of{' '}
            <span className='text-accent'>over 1,000</span> high-performing
            graphics that have engaged audiences across diverse platforms
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
        ref={container}
        className='relative mt-24 flex h-[50vw] items-center justify-center before:absolute
        before:inset-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[url("/assets/images/about/let_connect.jpg")] 
        before:bg-cover
        before:bg-center before:opacity-40 after:absolute 
        after:inset-0 after:z-[-1] after:block after:h-full after:w-full after:bg-black after:opacity-80 sm:h-[40vw]'
      >
        <div className='item-center flex-col justify-center'>
          <p className='gpim text-center font-tungsten text-[clamp(24px,5vw,5vw)] font-medium'>
            Got a project in mind?
          </p>
          <p className='let-connect font-tungstenNarrow text-[clamp(48px,10vw,10vw)] text-accent'>
            LET&apos;S CONNECT
          </p>
        </div>
        <a
          href='https://www.linkedin.com/in/tran-oai-418b591a6'
          target='_blank'
          className='cursor-pointer'
        >
          <div
            className='in-icon absolute left-[8%] top-[14%] flex h-[clamp(42px,8vw,8vw)] w-[clamp(42px,8vw,8vw)] cursor-pointer items-center justify-center
        rounded-full border-2 border-white font-tungsten font-medium sm:left-[22%] sm:border-4'
          >
            <p className='text-[clamp(18px,3vw,3vw)]'>LinkedIn</p>
          </div>
        </a>
        <a
          href='https://wa.me/+84834243285'
          target='_blank'
          className='cursor-pointer'
        >
          <div
            className='wa-icon absolute left-[26%] top-[60%] flex h-[clamp(48px,8vw,8vw)] w-[clamp(48px,8vw,8vw)] cursor-pointer items-center
        justify-center rounded-full border-2 border-white font-tungsten font-medium sm:border-4'
          >
            <p className='text-[clamp(18px,3vw,3vw)]'>Whatapp</p>
          </div>
        </a>
        <a
          target='_blank'
          className='cursor-pointer'
          href='https://www.facebook.com/trankhacoai'
        >
          <div
            className='fb-icon absolute left-[68%] top-[36%] flex h-[clamp(54px,9vw,9vw)] w-[clamp(54px,9vw,9vw)] cursor-pointer items-center
        justify-center rounded-full border-2 border-white font-tungsten font-medium sm:border-4'
          >
            <p className='text-[clamp(18px,3vw,3vw)]'>Facebook</p>
          </div>
        </a>
      </div>
    </main>
  )
}
