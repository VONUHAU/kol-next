'use client'
import { usePathname } from 'next/navigation'
import { projects } from '@/components/constants/data'
import YoutubePlayer from '@/components/youtubePlayer'
import { useEffect, useState, Suspense, useRef } from 'react'

const loadProject = 9
export default function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [visibleProjects, setVisibleProjects] = useState(loadProject)
  useEffect(() => {
    if (pathname == '/projects') {
      document.body.style.overflowY = 'auto'
    }
  }, [pathname])

  // useGSAP(
  //   () => {
  //     gsap.to('.famous-work', { opacity: 0, yPercent: 100, stagger: 0.1 })
  //   },
  //   { scope: container }
  // )

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + loadProject) // Increase the number of visible projects by 5
  }
  return (
    <Suspense>
      <main className='relative top-16 mb-24 mt-5 min-h-screen px-3 sm:px-8 md:px-12 lg:px-24 '>
        <div
          ref={container}
          className='head mb-8 text-center font-tungstenNarrow'
        >
          <div className='mb-3 overflow-hidden text-[clamp(46px,12vw,12vw)] leading-[0.7] text-accent md:gap-4'>
            <span className='famous-work inline-block'>F</span>
            <span className='famous-work inline-block'>A</span>
            <span className='famous-work inline-block'>M</span>
            <span className='famous-work inline-block'>O</span>
            <span className='famous-work inline-block'>U</span>
            <span className='famous-work inline-block'>S</span>
            <span> </span>
            <span className='famous-work inline-block'>W</span>
            <span className='famous-work inline-block'>O</span>
            <span className='famous-work inline-block'>R</span>
            <span className='famous-work inline-block'>K</span>
            {/* <div className='relative flex h-[clamp(18px,2vw,60px)] w-[clamp(18px,2vw,60px)] cursor-pointer items-center justify-center rounded-full border-2 border-accent'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 36 36'
                className='h-[50%] w-[50%] fill-white'
              >
                <polygon points='18 28.29 .14 10.43 2.86 7.71 18 22.85 33.14 7.71 35.86 10.43 18 28.29' />
              </svg>
            </div> */}
          </div>

          <p className='m-auto w-1/2 text-[clamp(20px,3vw,3vw)] leading-none'>
            Explore how we&apos;ve helped brands achieve results through
            captivating video content. Ready to wow?
          </p>
        </div>
        <div className='gallery mt-4 flex flex-wrap justify-around gap-4 md:mt-12 lg:mt-20'>
          {projects.slice(0, visibleProjects).map((project, key) => (
            <div key={key} className='mb-4'>
              <YoutubePlayer
                url={project.src}
                id={project.id}
                ratio={project.ratio}
                brand={project.brand}
                campaign={project.campaign}
              />
            </div>
          ))}
        </div>
        <div className='load-more flex justify-end font-tungstenNarrow text-[clamp(24px,2vw,2vw)]  '>
          <p
            className={`${
              visibleProjects >= projects.length ? 'hidden' : 'inline-block'
            } cursor-pointer text-secondary underline underline-offset-1 hover:text-accent`}
            onClick={loadMoreProjects}
          >
            More
          </p>
        </div>
      </main>
    </Suspense>
  )
}
