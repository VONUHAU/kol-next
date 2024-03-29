import React, { useEffect, useRef, useState } from 'react'

type Props = {
  url: string
  ratio: string
  id: string
  brand: string
  campaign: string
}
const CalculateSize = (ratio: string) => {
  switch (ratio) {
    case '9x16':
      return {
        w: `clamp(200px,20vw,400px)`,
        ratio: '9/16',
      }
    case '16x9':
      return {
        w: `clamp(300px,40vw,700px)`,
        ratio: '16/9',
      }
    default:
      return {
        w: `clamp(20px,20vw,400px)`,
        ratio: '9/16',
      }
  }
}
export default function YoutubePlayer({
  url,
  ratio,
  id,
  brand,
  campaign,
}: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const size = CalculateSize(ratio)
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  useEffect(() => {
    const handleIframeLoad = () => {
      setIsIframeLoaded(true)
    }

    const iframeElement = iframeRef.current
    if (iframeElement) {
      iframeElement.addEventListener('load', handleIframeLoad)
    }

    return () => {
      if (iframeElement) {
        iframeElement.removeEventListener('load', handleIframeLoad)
      }
    }
  }, [])
  return (
    <div className='video-card' style={{ width: size.w }}>
      <div
        className='youtube-container w-full overflow-hidden rounded-md md:rounded-lg'
        style={{ aspectRatio: size.ratio, width: size.w }}
      >
        <div
          className='relative flex h-full w-full items-center justify-center after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-secondary after:opacity-30'
          style={{ display: isIframeLoaded ? 'none' : 'flex' }}
        >
          <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <iframe
          ref={iframeRef}
          style={{ display: isIframeLoaded ? 'block' : 'none' }}
          src={`${url}&autoplay=0&color=white&rel=0&playlist=${id}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>

      <div className='card-bottom w-full font-tungstenNarrow'>
        <p className='text-[clamp(26px,2vw,40px)] text-accent'>{brand}</p>
        <p className='font-grotesk text-[clamp(22px,1vw,32px)] font-bold leading-[1.1] text-secondary'>
          Campaign: {campaign}
        </p>
      </div>
    </div>
  )
}
