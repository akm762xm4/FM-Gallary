import { useState, useEffect } from "react"
import { SmallLoader } from "../../../components/Loader"
import { usePopularVideosQuery } from "../api/videosApi"
import { VideoItem } from "../item/VideoItem"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Video } from "../types"
import { bubbleSound } from "../../../utils/playSound"

export const VideoList = () => {
  const [page, setPage] = useState(1)
  const [videos, setVideos] = useState<Video[]>([])
  const { data, isLoading, isFetching, isSuccess } = usePopularVideosQuery(page)
  let debounceTimeout: number

  const handleScroll = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }
    debounceTimeout = setTimeout(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((page) => page + 1)
        bubbleSound()
      }
    }, 500)
  }

  useEffect(() => {
    if (!data?.next_page) return
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [data])

  useEffect(() => {
    if (isSuccess) {
      setVideos((prevVideos) => {
        const uniqueVideos = data.videos.filter(
          (newVideo) => !prevVideos.some((video) => video.id === newVideo.id)
        )
        return [...prevVideos, ...uniqueVideos]
      })
    }
  }, [isSuccess, data])

  return (
    <div className="flex flex-col py-2 pl-2 overflow-hidden">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
        <Masonry gutter="7px">
          {videos.map((video) => {
            return <VideoItem key={video.id} video={video} />
          })}
        </Masonry>
      </ResponsiveMasonry>
      {(isFetching || isLoading) && <SmallLoader />}
    </div>
  )
}
