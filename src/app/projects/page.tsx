'use client'
import { usePathname } from 'next/navigation'
import { projects } from '@/components/constants/data'
import YoutubePlayer from '@/components/youtubePlayer'
import { useEffect, useState, Suspense } from 'react'

const loadProject = 9
export default function Projects() {
  const pathname = usePathname()
  const [visibleProjects, setVisibleProjects] = useState(loadProject)
  useEffect(() => {
    if (pathname == '/projects') {
      document.body.style.overflowY = 'auto'
    }
  }, [pathname])

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + loadProject) // Increase the number of visible projects by 5
  }
  return (
    <Suspense>
      <main className='relative top-16 mb-24 mt-5 min-h-screen px-3 sm:px-8 md:px-12 lg:px-24 '>
        <div className='head mb-8 text-center font-tungstenNarrow'>
          <div className='mb-3 flex items-end justify-center gap-2 md:gap-4'>
            <p className='text-[clamp(36px,6vw,6vw)] leading-[0.7] text-accent'>
              FAMOUS WORKS
            </p>
            <div className='relative flex h-[clamp(18px,2vw,60px)] w-[clamp(18px,2vw,60px)] cursor-pointer items-center justify-center rounded-full border-2 border-accent'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 36 36'
                className='h-[50%] w-[50%] fill-white'
              >
                <polygon points='18 28.29 .14 10.43 2.86 7.71 18 22.85 33.14 7.71 35.86 10.43 18 28.29' />
              </svg>
            </div>
          </div>

          <p className='m-auto w-1/2 text-[clamp(20px,3vw,3vw)] leading-none'>
            TRANSHUMANISM EATS DIRT AT THE END OF TIME. HOW DO YOU LIKE THAT AS
            AN OPENER? EVERYTHING FOR FREE ON
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
