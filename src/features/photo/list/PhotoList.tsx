import { useState, useEffect } from "react"
import { useCuratedPhotosQuery } from "../api/photoApi"
import { PhotoItem } from "../item/PhotoItem"
import { Photo } from "../types"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SmallLoader } from "../../../components/Loader"
import { bubbleSound } from "../../../utils/playSound"

export const PhotoList = () => {
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState<Photo[]>([])
  const { data, isSuccess, isFetching, isLoading } = useCuratedPhotosQuery(page)
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
      setPhotos((prevPhotos) => {
        const uniquePhotos = data.photos.filter(
          (newPhoto) => !prevPhotos.some((photo) => photo.id === newPhoto.id)
        )
        return [...prevPhotos, ...uniquePhotos]
      })
    }
  }, [isSuccess, data])

  return (
    <div className="flex flex-col py-2 pl-2 overflow-hidden">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
        <Masonry gutter="7px">
          {photos?.map((photo) => {
            return <PhotoItem key={photo.id} photo={photo} />
          })}
        </Masonry>
      </ResponsiveMasonry>
      {(isFetching || isLoading) && <SmallLoader />}
    </div>
  )
}
