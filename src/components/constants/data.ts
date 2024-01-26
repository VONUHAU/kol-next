import Img from '../../../public/assets/images/projects/2020-10-30_LA-Reduced.jpg'
import Img2 from '../../../public/assets/images/projects/2021-08_Archives01.jpeg'
import Img3 from '../../../public/assets/images/projects/2022-05-26_reduced.jpg'
import Img4 from '../../../public/assets/images/projects/byebye-noaddy.jpg'

export type ImageCardProp = {
  src: any
  projectName: string
  brand: string
  campaign: string
  slug: string
  detail: any
}

export const projects: ImageCardProp[] = [
  {
    src: Img,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
    campaign: 'The Luna New Year',
    slug: 'the-chicago',
    detail: {
      overview: {
        challenge:
          ' The team at Istria wanted a new design system and digital experience to elevate ffEir and reflate their investments incompatibles that make a difference in advancing social issues',
        approach:
          ' We overhauled their current design system and content strategy with a unique and sophisticated look that better reflated the company vision',
      },
      storyboard: {
        creativeBlurb:
          'We overhauled their current design system and content mega with anile and sophisticated look that better reflated the company vision',
        imgs: [
          '/assets/images/projects/thumbnail.png',
          '/assets/images/projects/thumbnail.png',
          '/assets/images/projects/thumbnail.png',
          '/assets/images/projects/thumbnail.png',
        ],
      },
      finalArt: {
        keyword: 'Color',
        thumbnail: 'bg-[url("/assets/images/projects/thumbnail.png")]',
        url: 'https://vod-progressive.akamaized.net/exp=1706268501~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2712%2F21%2F538561465%2F2552299723.mp4~hmac=1970b914992f6a1f212f27fe43e6403a6021b5a794da6d59ae05400be1e98603/vimeo-prod-skyfire-std-us/01/2712/21/538561465/2552299723.mp4',
      },
    },
  },
  {
    src: Img2,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
    campaign: 'The Luna New Year',
    slug: 'the-chicago2',
    detail: {
      overview: {
        challenge:
          ' The team at Istria wanted a new design system and digital experience to elevate ffEir and reflate their investments incompatibles that make a difference in advancing social issues',
        approach:
          ' We overhauled their current design system and content strategy with a unique and sophisticated look that better reflated the company vision',
      },
      storyboard: {
        creativeBlurb:
          'We overhauled their current design system and content mega with anile and sophisticated look that better reflated the company vision',
        imgs: [],
      },
      finalArt: {
        keyword: 'Leave',
        url: '',
      },
    },
  },
  {
    src: Img3,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
    campaign: 'The Luna New Year',
    slug: 'the-chicago3',
    detail: {
      overview: {
        challenge:
          ' The team at Istria wanted a new design system and digital experience to elevate ffEir and reflate their investments incompatibles that make a difference in advancing social issues',
        approach:
          ' We overhauled their current design system and content strategy with a unique and sophisticated look that better reflated the company vision',
      },
      storyboard: {
        creativeBlurb:
          'We overhauled their current design system and content mega with anile and sophisticated look that better reflated the company vision',
        imgs: [],
      },
      finalArt: {
        keyword: 'Leave',
        url: '',
      },
    },
  },
  {
    src: Img4,
    projectName: 'The Chicago',
    brand: 'XiaoMi',
    campaign: 'The Luna New Year',
    slug: 'the-chicago4',
    detail: {
      overview: {
        challenge:
          ' The team at Istria wanted a new design system and digital experience to elevate ffEir and reflate their investments incompatibles that make a difference in advancing social issues',
        approach:
          ' We overhauled their current design system and content strategy with a unique and sophisticated look that better reflated the company vision',
      },
      storyboard: {
        creativeBlurb:
          'We overhauled their current design system and content mega with anile and sophisticated look that better reflated the company vision',
        imgs: [],
      },
      finalArt: {
        keyword: 'Leave',
        url: '',
      },
    },
  },
]
