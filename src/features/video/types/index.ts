export interface Video {
  types?: string
  id: number
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
