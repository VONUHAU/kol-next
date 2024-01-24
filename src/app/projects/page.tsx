import Image from 'next/image'
import Gain from '../../../public/assets/images/gain.jpg'
import Img from '../../../public/assets/images/projects/2020-10-30_LA-Reduced.jpg'
import Img2 from '../../../public/assets/images/projects/2021-08_Archives01.jpeg'
import Img3 from '../../../public/assets/images/projects/2022-05-26_reduced.jpg'
import Img4 from '../../../public/assets/images/projects/byebye-noaddy.jpg'

type ImageCardProp = {
  src: any
  projectName: string
  brand: string
}

const projects = [
  {
    src: Img,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
  },
  {
    src: Img2,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
  },
  {
    src: Img3,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
  },
  ,
  {
    src: Img4,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
  },
]
const ImageCard: React.FC<ImageCardProp> = ({ src, projectName, brand }) => {
  return (
    <div className='card'>
      <div className='group relative mb-2.5'>
        <div className='absolute inset-0 h-full w-full opacity-0 group-hover:opacity-40'>
          <Image
            src={Gain}
            alt='gain'
            className='h-full w-full object-cover object-center'
          />
        </div>

        <Image src={src} alt='kol-next-galley w-full h-full' />
      </div>
      <div className='des'>
        <div className='text-secondary'>
          <p>{projectName}</p>
        </div>
        <div className='text-secondary'>
          <p>{brand}</p>
        </div>
        <div className='item-center flex'>
          <svg
            width='70'
            height='70'
            viewBox='0 0 70 70'
            xmlns='http://www.w3.org/2000/svg'
            fill='green'
          >
            <path d='M64.5925 21.2911H59.2814V10.6801H53.9814V5.36896H59.2814V0.0690262H64.5925V5.36896H69.9036V10.6801H64.5925V21.2911ZM53.9827 58.4446V63.7557H59.2826V69.0668H64.5937V63.7557H69.9048V58.4446H64.5937V53.1446H59.2826V58.4446H53.9827ZM48.6715 26.602H59.2814V21.2909H48.6715V15.9903H43.3604V21.2909H38.0493V15.9903H43.3604V10.6792H27.439V15.9903H32.7501V21.2909H27.439V15.9903H22.1279V21.2909H11.5168V26.602H22.1279V42.5242H16.8272V47.8353H11.5161V53.1464H27.4383V58.4464H32.7494V63.7575H38.05V58.4464H43.3611V53.1464H59.2819V47.8353H53.9819V42.5242H48.6708V26.602H48.6715ZM6.20715 58.4446H0.906508V63.7557H6.20715V69.0668H11.5183V63.7557H16.8294V58.4446H11.5183V53.1446H6.20715V58.4446ZM11.5168 10.6799H16.828V5.36879H11.5168V0.0688477H6.20574V5.36879H0.90509V10.6799H6.20574V21.2909H11.5168V10.6799Z' />
          </svg>
          <div className='barcode'></div>
          <svg
            width='70'
            height='70'
            viewBox='0 0 70 70'
            xmlns='http://www.w3.org/2000/svg'
            fill='green'
          >
            <path d='M64.5925 21.2911H59.2814V10.6801H53.9814V5.36896H59.2814V0.0690262H64.5925V5.36896H69.9036V10.6801H64.5925V21.2911ZM53.9827 58.4446V63.7557H59.2826V69.0668H64.5937V63.7557H69.9048V58.4446H64.5937V53.1446H59.2826V58.4446H53.9827ZM48.6715 26.602H59.2814V21.2909H48.6715V15.9903H43.3604V21.2909H38.0493V15.9903H43.3604V10.6792H27.439V15.9903H32.7501V21.2909H27.439V15.9903H22.1279V21.2909H11.5168V26.602H22.1279V42.5242H16.8272V47.8353H11.5161V53.1464H27.4383V58.4464H32.7494V63.7575H38.05V58.4464H43.3611V53.1464H59.2819V47.8353H53.9819V42.5242H48.6708V26.602H48.6715ZM6.20715 58.4446H0.906508V63.7557H6.20715V69.0668H11.5183V63.7557H16.8294V58.4446H11.5183V53.1446H6.20715V58.4446ZM11.5168 10.6799H16.828V5.36879H11.5168V0.0688477H6.20574V5.36879H0.90509V10.6799H6.20574V21.2909H11.5168V10.6799Z' />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default function Projects() {
  return (
    <main className='relative top-16 mt-5 min-h-screen'>
      <div className='head mb-8 text-center font-tungstenNarrow'>
        <div className='mb-3 flex items-end justify-center gap-2 md:gap-4'>
          <p className='hero-text leading-[0.7] text-accent'>FAMOUS WORKS</p>
          <div className='relative flex h-[clamp(16px,2vw,60px)] w-[clamp(16px,2vw,60px)] cursor-pointer items-center justify-center rounded-full border-2 border-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 36 36'
              className='h-[50%] w-[50%] fill-white'
            >
              <polygon points='18 28.29 .14 10.43 2.86 7.71 18 22.85 33.14 7.71 35.86 10.43 18 28.29' />
            </svg>
          </div>
        </div>

        <p className='m-auto w-1/2 text-[3vw] leading-none'>
          TRANSHUMANISM EATS DIRT AT THE END OF TIME. HOW DO YOU LIKE THAT AS AN
          OPENER? EVERYTHING FOR FREE ON
        </p>
      </div>
      <div className='gallery'>
        {projects.map((project, key) => (
          <ImageCard {...project} key={key} />
        ))}
      </div>
    </main>
  )
}
