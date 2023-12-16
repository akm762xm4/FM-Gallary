import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSearchPhotosQuery } from "../api/searchApi"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { PhotoItem } from "../../photo/item/PhotoItem"
import { Photo } from "../../photo/types"
import { SmallLoader } from "../../../components/Loader"
import { bubbleSound } from "../../../utils/playSound"

export const Result = () => {
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState<Photo[]>([])
  const { term } = useParams()
  const { data, isLoading, isFetching, isSuccess } = useSearchPhotosQuery({
    term: term!,
    page,
  })
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
