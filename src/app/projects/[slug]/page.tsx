'use client'
import Image from 'next/legacy/image'
import { projects } from '@/components/constants/data'
import { useRef, useState } from 'react'

export default function Project({ params }: { params: { slug: string } }) {
  const [isPlay, setPlay] = useState(false)
  const iframeRef = useRef(null)
  const getProject = (id: string) => {
    for (const pro of projects) {
      if (pro.slug == id) {
        return pro
      }
    }
  }

  const project = getProject(params.slug)

  return (
    <main className='relative mb-5 mt-4 font-tungsten sm:mt-8 sm:px-4 md:mt-14 md:px-12 lg:px-24'>
      <div className='text-center font-tungstenNarrow text-[clamp(48px,10vw,10vw)] leading-[1] text-accent'>
        <p>{project ? params.slug.toUpperCase() : 'null'}</p>
      </div>
      <div className='overview'>
        <p className='font-tungsten text-[clamp(32px,3vw,3vw)] font-bold text-white'>
          Overview
        </p>
        <div className='mt-3 grid leading-none sm:grid-cols-6 sm:px-6 lg:px-24'>
          <div className='col text-[clamp(24px,4vw,4vw)] font-bold text-accent'>
            Challenge
          </div>
          <div className='col-span-5 text-[clamp(24px,4vw,4vw)]'>
            {project?.detail.overview.challenge}
          </div>
          <div className='col mt-3 text-[clamp(24px,4vw,4vw)] font-bold text-accent sm:mt-5 lg:mt-20'>
            Approach
          </div>
          <div className='col-span-5 text-[clamp(24px,4vw,4vw)] sm:mt-5 lg:mt-20'>
            {project?.detail.overview.approach}
          </div>
        </div>
      </div>
      <div className='storyBoard mt-8 sm:mt-12 lg:mt-20'>
        <p className='font-tungsten text-[clamp(32px,3vw,3vw)] font-bold text-white'>
          Storyboard
        </p>
        <div className='creative mt-3 leading-none md:block'>
          <div className='md:pr:12 justify-between sm:flex sm:gap-3 lg:pr-24'>
            <div className='create-blurb sm:w-[30%]'>
              <div className='col text-[clamp(24px,4vw,4vw)] font-bold text-accent'>
                Blurb
              </div>
              <div className='text-[clamp(24px,3vw,3vw)] text-white'>
                {project?.detail.storyboard.creativeBlurb}
              </div>
            </div>
            <div className='sm-mt-0 mt-6 flex justify-center gap-5 md:justify-start lg:gap-20'>
              <div className='space-y-4 lg:space-y-20'>
                {project?.detail.storyboard.imgs
                  .slice(0, project?.detail.storyboard.imgs.length / 2)
                  .map((val: string, key: number) => (
                    <div
                      className='relative h-[54vw] w-[30vw] overflow-hidden rounded-[0.8vw] border-[0.3vw] border-solid border-white md:h-[32vw] md:w-[18vw]'
                      key={key}
                    >
                      <Image
                        src={val}
                        objectFit='cover'
                        sizes=''
                        alt='kol-next-storyboard'
                        layout='fill'
                      />
                      <div className='absolute bottom-0 left-0 flex h-1/5 w-full items-center'>
                        <svg
                          width='60'
                          height='60'
                          viewBox='0 0 60 60'
                          className='h-full w-1/5'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M0 30C16.5684 30 30 16.5684 30 0C30 16.5684 43.4316 30 60 30C43.4316 30 30 43.4316 30 60C30 43.4316 16.5684 30 0 30Z'
                            fill='#FFD8BC'
                          />
                        </svg>

                        <p className='font-tungstenNarrow text-[clamp(24px,4vw,4vw)]'>
                          {(key + 1).toString().padStart(2, '0')}
                        </p>
                        <svg
                          width='60'
                          height='60'
                          viewBox='0 0 60 60'
                          className='h-full w-1/5'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M0 30C16.5684 30 30 16.5684 30 0C30 16.5684 43.4316 30 60 30C43.4316 30 30 43.4316 30 60C30 43.4316 16.5684 30 0 30Z'
                            fill='#FFD8BC'
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='mt-10 space-y-4 lg:mt-24 lg:space-y-20'>
                {project?.detail.storyboard.imgs
                  .slice(
                    project?.detail.storyboard.imgs.length / 2,
                    project?.detail.storyboard.imgs.length
                  )
                  .map((val: string, key: number) => (
                    <div
                      className='relative h-[54vw] w-[30vw] overflow-hidden rounded-[0.8vw] border-[0.3vw] border-solid border-white md:h-[32vw] md:w-[18vw]'
                      key={key}
                    >
                      <Image
                        src={val}
                        objectFit='cover'
                        sizes=''
                        alt='kol-next-storyboard'
                        layout='fill'
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative mt-8 sm:mt-12 lg:mt-20'>
        <p className='font-tungsten text-[clamp(32px,3vw,3vw)] font-bold text-white'>
          Final Touch
        </p>
        <div className='video-wrap relative mt-5 sm:mt-10 lg:mt-16'>
          <div
            className={`relative m-auto min-w-[170px] max-w-max overflow-hidden rounded border-[0.5rem] border-solid border-white sm:rounded-xl sm:border-[0.8vw] `}
          >
            <div
              onMouseOver={() => setPlay(true)}
              style={{ display: !isPlay ? 'block' : 'none' }}
              className={`absolute inset-0 block h-full w-full
                  ${project?.detail.finalArt.thumbnail} bg-cover bg-center `}
            ></div>
            <iframe
              ref={iframeRef}
              src='https://drive.google.com/file/d/1S3-QcIo5vHcj3tW9wKnzFCjPtaxClVXF/preview'
              className={`after:bg m-auto h-[clamp(300px,32vw,32vw)] w-[clamp(170px,18vw,18vw)]`}
              allow='autoplay'
            ></iframe>
          </div>

          <p className='absolute left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2 font-tungstenNarrow text-[clamp(200px,32vw,32vw)] text-accent lg:tracking-[2rem]'>
            {project?.detail.finalArt.keyword.toUpperCase()}
          </p>
          <p className='text-stroke absolute left-[49%] top-[54%] -z-[1] -translate-x-1/2 -translate-y-1/2 font-tungstenNarrow text-[clamp(200px,32vw,32vw)]  lg:tracking-[2rem] '>
            {project?.detail.finalArt.keyword.toUpperCase()}
          </p>
        </div>
      </div>
    </main>
  )
}
