import Link from 'next/link'
import { Fragment } from 'react'

const Arrows = ({ color }: { color: string }) => {
  return (
    <div className='flex gap-0'>
      {[...Array(6)].map((key) => (
        <div
          key={key}
          className='h-[clamp(40px,5vw,5vw)] w-[clamp(20px,1.5vw,1.5vw)]'
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 40 63'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
          >
            <path
              d='M38.0672 55.4652L31.4994 61.5586L1.41421 31.4734L31.4318 1.45579L38.1108 8.9448L15.3089 30.7507L14.578 31.4497L15.2851 32.1726L38.0672 55.4652Z'
              stroke={color}
              stroke-width='2'
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
export default function NotFound() {
  return (
    <main className='relative mb-5 mt-4 sm:mt-8 md:mt-14'>
      <div className='relative top-16 font-tungstenNarrow'>
        <div className='flex flex-col items-center justify-center text-center text-[clamp(48px,10vw,10vw)] leading-[1] text-accent'>
          <p>404</p>
          <p>NOT FOUND!</p>
        </div>
        <Link href='/'>
          <div className='text-slider -mx-8 mt-5 flex items-center gap-4 bg-black py-1 md:gap-10'>
            {[...Array(8)].map((val) => (
              <Fragment key={val}>
                <Arrows color='#c2bca6' />
                <p className='whitespace-nowrap text-[clamp(32px,5vw,5vw)] text-secondary'>
                  GO BACK
                </p>
                <Arrows color='#d53c00' />
                <p className='whitespace-nowrap text-[clamp(32px,5vw,5vw)] text-accent'>
                  GO BACK
                </p>
              </Fragment>
            ))}
          </div>
        </Link>
        <div className='-mx-8 flex h-[30vw] w-screen flex-1 items-center justify-center'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 70 70'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-1/3 fill-secondary'
          >
            <path d='M64.5925 21.2911H59.2814V10.6801H53.9814V5.36896H59.2814V0.0690262H64.5925V5.36896H69.9036V10.6801H64.5925V21.2911ZM53.9827 58.4446V63.7557H59.2826V69.0668H64.5937V63.7557H69.9048V58.4446H64.5937V53.1446H59.2826V58.4446H53.9827ZM48.6715 26.602H59.2814V21.2909H48.6715V15.9903H43.3604V21.2909H38.0493V15.9903H43.3604V10.6792H27.439V15.9903H32.7501V21.2909H27.439V15.9903H22.1279V21.2909H11.5168V26.602H22.1279V42.5242H16.8272V47.8353H11.5161V53.1464H27.4383V58.4464H32.7494V63.7575H38.05V58.4464H43.3611V53.1464H59.2819V47.8353H53.9819V42.5242H48.6708V26.602H48.6715ZM6.20715 58.4446H0.906508V63.7557H6.20715V69.0668H11.5183V63.7557H16.8294V58.4446H11.5183V53.1446H6.20715V58.4446ZM11.5168 10.6799H16.828V5.36879H11.5168V0.0688477H6.20574V5.36879H0.90509V10.6799H6.20574V21.2909H11.5168V10.6799Z' />
          </svg>

          <svg
            width='100%'
            height='100%'
            viewBox='0 0 70 70'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-1/3 fill-secondary'
          >
            <path d='M64.5925 21.2911H59.2814V10.6801H53.9814V5.36896H59.2814V0.0690262H64.5925V5.36896H69.9036V10.6801H64.5925V21.2911ZM53.9827 58.4446V63.7557H59.2826V69.0668H64.5937V63.7557H69.9048V58.4446H64.5937V53.1446H59.2826V58.4446H53.9827ZM48.6715 26.602H59.2814V21.2909H48.6715V15.9903H43.3604V21.2909H38.0493V15.9903H43.3604V10.6792H27.439V15.9903H32.7501V21.2909H27.439V15.9903H22.1279V21.2909H11.5168V26.602H22.1279V42.5242H16.8272V47.8353H11.5161V53.1464H27.4383V58.4464H32.7494V63.7575H38.05V58.4464H43.3611V53.1464H59.2819V47.8353H53.9819V42.5242H48.6708V26.602H48.6715ZM6.20715 58.4446H0.906508V63.7557H6.20715V69.0668H11.5183V63.7557H16.8294V58.4446H11.5183V53.1446H6.20715V58.4446ZM11.5168 10.6799H16.828V5.36879H11.5168V0.0688477H6.20574V5.36879H0.90509V10.6799H6.20574V21.2909H11.5168V10.6799Z' />
          </svg>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 70 70'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-1/3 fill-secondary'
          >
            <path d='M64.5925 21.2911H59.2814V10.6801H53.9814V5.36896H59.2814V0.0690262H64.5925V5.36896H69.9036V10.6801H64.5925V21.2911ZM53.9827 58.4446V63.7557H59.2826V69.0668H64.5937V63.7557H69.9048V58.4446H64.5937V53.1446H59.2826V58.4446H53.9827ZM48.6715 26.602H59.2814V21.2909H48.6715V15.9903H43.3604V21.2909H38.0493V15.9903H43.3604V10.6792H27.439V15.9903H32.7501V21.2909H27.439V15.9903H22.1279V21.2909H11.5168V26.602H22.1279V42.5242H16.8272V47.8353H11.5161V53.1464H27.4383V58.4464H32.7494V63.7575H38.05V58.4464H43.3611V53.1464H59.2819V47.8353H53.9819V42.5242H48.6708V26.602H48.6715ZM6.20715 58.4446H0.906508V63.7557H6.20715V69.0668H11.5183V63.7557H16.8294V58.4446H11.5183V53.1446H6.20715V58.4446ZM11.5168 10.6799H16.828V5.36879H11.5168V0.0688477H6.20574V5.36879H0.90509V10.6799H6.20574V21.2909H11.5168V10.6799Z' />
          </svg>
        </div>
      </div>
    </main>
  )
}
