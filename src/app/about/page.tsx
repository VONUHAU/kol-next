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
  {
    year: '2016',
    jobTitle: 'Motion Designer',
    companyName: 'unknow.com',
  },
]
export const JobBar = ({ year, jobTitle, companyName }: Job) => {
  return (
    <div className='flex cursor-pointer gap-24 border-b border-secondary bg-black px-16 py-6 text-4xl text-secondary transition-all duration-300 last:border-0 hover:bg-accent hover:text-black'>
      <p>{year}</p>
      <div>
        <p className=''>{jobTitle}</p>
        <p className='text-xl'>{companyName}</p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className='relative mt-28 min-h-screen '>
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
      <div className='space-y-24 text-secondary sm:px-12 md:px-24'>
        <div className='my-8 font-sans '>
          <div className='text-[3vw]'>
            <p>About me</p>
          </div>
          <div className='text-[5.5vw] font-[400] leading-none'>
            I m a <span className='text-accent'>selectively skilled</span>{' '}
            product
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
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
          <p className='z-10'>CREATIVE.</p>
          <p className='z-10 text-accent'>CREATIVE.</p>
        </div>
        <div className='my-8 font-sans'>
          <div className=' text-[3vw]'>
            <p>Experience</p>
          </div>
          <div className='text-[5.5vw] font-[400] leading-none'>
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
      </div>
      <div className='relative -mx-8 flex h-[40vw] items-center justify-center p-16 before:absolute before:inset-0 before:z-[-1] before:block before:h-full before:w-full  before:bg-[url("/assets/images/about/let_connect.jpg")] before:bg-cover before:bg-center before:opacity-20 before:content-[""]'>
        <div className='item-center flex-col justify-center'>
          <p className='text-center font-tungstenNarrow text-5xl'>
            Got a project in mind?
          </p>
          <p className='font-tungstenNarrow text-9xl text-accent'>
            LET's CONNECT
          </p>
        </div>
        <div className='absolute left-[30vw] top-24 flex h-[10vw] w-[10vw] items-center justify-center rounded-full border-2 border-white'>
          <p>Linkin</p>
        </div>
        <div className='top-225 absolute left-[20vw] flex h-[10vw] w-[10vw] items-center justify-center rounded-full border-2 border-white'>
          <p>Whatapp</p>
        </div>
        <div className='top-128 absolute left-[60vw] flex h-[10vw] w-[10vw] items-center justify-center rounded-full border-2 border-white'>
          <p>Instagram</p>
        </div>
      </div>
    </main>
  )
}
