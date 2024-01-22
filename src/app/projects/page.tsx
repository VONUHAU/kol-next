import Image from 'next/image'
import Gain from '../../../public/assets/images/gain.jpg'
import Img from '../../../public/assets/images/projects/africa-lounge.jpeg'
import Img2 from '../../../public/assets/images/projects/amsumo-rampage.jpeg'
import Img3 from '../../../public/assets/images/projects/anabaptists-childhood.jpeg'
import Img4 from '../../../public/assets/images/projects/anabaptists-memories-lost.jpeg'
import Img5 from '../../../public/assets/images/projects/anabaptists-storm.jpeg'
import Img6 from '../../../public/assets/images/projects/anabaptists-the-grave.jpeg'
import Img7 from '../../../public/assets/images/projects/anabaptists-the-kiss.jpeg'
import Img8 from '../../../public/assets/images/projects/anabaptists-yasens-arrival.jpeg'
import Img9 from '../../../public/assets/images/projects/anubians-imiut-skin.jpeg'
import Img10 from '../../../public/assets/images/projects/anubians-ritual.jpeg'
import Img11 from '../../../public/assets/images/projects/apocalyptics-rust-falcon.jpeg'
type ImageCardProp = {
  src: any
}

const images = [
  Img,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
]
const ImageCard: React.FC<ImageCardProp> = ({ src }) => {
  return (
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
  )
}
export default function Projects() {
  return (
    <main className='relative top-16 mt-5 min-h-screen'>
      <div className='head mb-8 text-center font-tungstenNarrow'>
        <div className='mb-3 flex items-end justify-center gap-2 md:gap-4'>
          <p className='hero-text leading-[0.7] text-accent'>DEGENESIS</p>
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
        <p className='m-auto text-[3vw] leading-none text-accent'>
          DEGENESIS.COM
        </p>
      </div>
      <div className='gallery'>
        <div className='float-left w-1/3 p-2.5'>
          {images
            .slice(Math.floor(images.length / 3) * 2 + 1, images.length)
            .map((value, key) => (
              <ImageCard src={value} key={key} />
            ))}
        </div>
        <div className='float-left w-1/3 p-2.5'>
          {images
            .slice(0, Math.floor(images.length / 3) + 1)
            .map((value, key) => (
              <ImageCard src={value} key={key} />
            ))}
        </div>
        <div className='float-left w-1/3 p-2.5'>
          {images
            .slice(
              Math.floor(images.length / 3) + 1,
              Math.floor(images.length / 3) * 2 + 1
            )
            .map((value, key) => (
              <ImageCard src={value} key={key} />
            ))}
        </div>
      </div>
    </main>
  )
}
