import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetCollectionMediaQuery } from "../api/collectionApi"
import { PhotoItem } from "../../photo/item/PhotoItem"
import { VideoItem } from "../../video/item/VideoItem"
import { Media } from "../types"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SmallLoader } from "../../../components/Loader"
import { bubbleSound } from "../../../utils/playSound"

export const CollectionInfo = () => {
  const { cId } = useParams()
  const [page, setPage] = useState(1)
  const [media, setMedia] = useState<Media[]>([])
  const { data, isLoading, isFetching, isSuccess } = useGetCollectionMediaQuery(
    {
      cId: cId!,
      page,
    }
  )
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
      setMedia((prevMedia) => {
        const uniqueMedia = data?.media?.filter(
          (newMedia) => !prevMedia.some((media) => media.id === newMedia.id)
        )
        return [...prevMedia, ...uniqueMedia]
      })
    }
  }, [isSuccess, data])

  return (
    <div className="flex flex-col py-2 pl-2 overflow-hidden">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
        <Masonry gutter="7px">
          {media.map((media) =>
            media.type === "Photo" ? (
              <PhotoItem key={media.id} photo={media} />
            ) : (
              <VideoItem key={media.id} video={media} />
            )
          )}
        </Masonry>
      </ResponsiveMasonry>
      {(isFetching || isLoading) && <SmallLoader />}
    </div>
  )
}
