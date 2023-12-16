import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bubbleSound } from "../../../utils/playSound"
import { useGetPhotoQuery } from "../api/photoApi"
import { NoResults } from "../../../components/NoResults"
import { Loader } from "../../../components/Loader"
export const PhotoInfo = () => {
  const { photoId } = useParams()

  const { data: photo, isLoading, isFetching } = useGetPhotoQuery(photoId!)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState(photo?.src?.original)

  useEffect(() => {
    setUrl(photo?.src.original)
  }, [photo])

  if (isLoading || isFetching) {
    return <Loader />
  }

  if (!photo) {
    return <NoResults />
  }

  const handleClick = (url: string) => {
    bubbleSound()
    setLoading(true)
    setUrl(url)
    setTimeout(() => setLoading(false), 300)
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div
        style={{ backgroundColor: photo.avg_color }}
        className="flex basis-4/5 items-center justify-center min-h-[68vh] md:min-h-min max-h-[68vh] md:max-h-max md:h-[100vh]"
      >
        <img
          className={`max-h-[100vh] transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={loading ? "" : url}
        />
      </div>
      <div className="basis-1/5 p-2 flex flex-col gap-2 items-center justify-center">
        <div className="text-center">
          photo by{" "}
          <span className="text-primary text-xl">{photo.photographer}</span>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-1 text-xs md:text-sm">
          <span
            className={`${
              url === photo.src.landscape
                ? "bg-secondary text-black font-bold"
                : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.landscape)}
          >
            1200 X 627
          </span>
          <span
            className={`${
              url === photo.src.large ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.large)}
          >
            940 X 650
          </span>
          <span
            className={`${
              url === photo.src.large2x
                ? "bg-secondary text-black font-bold"
                : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.large2x)}
          >
            940 X 650
          </span>
          <span
            className={`${
              url === photo.src.medium
                ? "bg-secondary text-black font-bold"
                : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.medium)}
          >
            ? X 350
          </span>
          <span
            className={`${
              url === photo?.src?.original
                ? "bg-secondary text-black font-bold"
                : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.original)}
          >
            ? X ?
          </span>
          <span
            className={`${
              url === photo.src.portrait
                ? "bg-secondary text-black font-bold"
                : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.portrait)}
          >
            800 X 1200
          </span>
          <span
            className={`${
              url === photo.src.small ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.small)}
          >
            ? X 130
          </span>
          <span
            className={`${
              url === photo.src.tiny ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-secondary rounded cursor-pointer`}
            onClick={() => handleClick(photo.src.tiny)}
          >
            280 X 200
          </span>
        </div>
      </div>
    </div>
  )
}
