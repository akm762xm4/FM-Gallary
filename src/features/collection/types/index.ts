export interface Collection {
  id: string
  title: string
  description: string
  private: boolean
  media_count: number
  photos_count: number
  videos_count: number
}

export interface Media {
  type: string
  id: number
  //photo
  url: string
  photographer: string
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  alt: string
  //video
  image: string
  user: {
    id: number
    name: string
  }
  video_files: {
    id: number
    link: string
  }[]
}
