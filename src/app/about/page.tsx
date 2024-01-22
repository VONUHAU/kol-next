import Image from 'next/image'

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
]
export const JobBar = ({ year, jobTitle, companyName }: Job) => {
  return (
    <div className='flex gap-8 border-b border-secondary bg-black px-8 text-6xl text-white transition-all duration-300 hover:bg-accent hover:text-black'>
      <p>{year}</p>
      <div>
        <p className=''>{jobTitle}</p>
        <p className='text-2xl'>{companyName}</p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className='relative  mt-28 min-h-screen'>
      <div className='relative -mx-8 flex items-center justify-center p-16 before:absolute before:inset-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[url("/assets/images/about/hh_left.png")] before:bg-cover before:bg-center before:opacity-20 before:content-[""]'>
        <div className='item-center z-[20] flex justify-center'>
          <div className='good hero-text peer text-center font-tungstenNarrow hover:hidden'>
            <p>MAKING</p>
            <p className='text-accent'>GOOD</p>
            <p className='text-accent'>SHIT</p>
            <p>SINCE</p>
            <p>2016</p>
          </div>
          <div className='hero-text hidden text-center font-tungstenNarrow peer-hover:block'>
            <p>HIDING</p>
            <p className='text-accent'>BAD</p>
            <p className='text-accent'>SHIT</p>
            <p>SINCE</p>
            <p>2016</p>
          </div>
        </div>
      </div>
      <div className='text-TungstenMedium my-8'>
        <div className=' text-3xl'>
          <p>About me</p>
        </div>
        <div className='text-[130px] leading-none'>
          I m a <span className='text-accent'>selectively skilled</span> product
          <br />
          designer with strong focus on <br />
          producing high quality &<br /> impactful digital experience.
        </div>
        <div className='relative'>
          <Image src='/assets/images/about/globe.png' alt='global' fill />
        </div>
      </div>
      <div className='pattern relative  flex h-36 w-full items-center gap-4 overflow-hidden rounded-2xl border-4 border-secondary bg-black font-tungstenNarrow text-9xl text-white'>
        <p className='z-10 text-accent'>CREATIVE.</p>
        <p className='z-10'>CREATIVE.</p>
        <p className='z-10 text-accent'>CREATIVE.</p>
        <p className='z-10'>CREATIVE.</p>
        <p className='z-10 text-accent'>CREATIVE.</p>
      </div>
      <div className='text-TungstenMedium my-8'>
        <div className=' text-3xl'>
          <p>Experience</p>
        </div>
        <div className='text-[130px] leading-none'>
          Over <span className='text-accent'>a decade</span> product
          <br />
          designer with strong focus on <br />
          producing high quality &<br /> impactful digital experience.
        </div>
        <div className='relative'>
          <Image src='/assets/images/about/globe.png' alt='global' fill />
        </div>
      </div>
      <div>
        {experiences.map((experience, key) => (
          <JobBar key={key} {...experience} />
        ))}
      </div>
      <div className='relative'>
        <p className='text-3xl'>Got a project in mind</p>
        <p className='text-8xl text-accent'>LET's CONNECT</p>
        <div className='absolute left-[30vw] top-24 flex h-[10vw] w-[10vw] items-center justify-center rounded-full border border-white'>
          <p>Linkin</p>
        </div>
        <div className='top-225 absolute left-[20vw] flex h-[10vw] w-[10vw] items-center justify-center rounded-full border border-white'>
          <p>Whatapp</p>
        </div>
        <div className='top-128 absolute left-[60vw] flex h-[10vw] w-[10vw] items-center justify-center rounded-full border border-white'>
          <p>Instagram</p>
        </div>
      </div>
    </main>
  )
}
