import { useParams } from "react-router-dom"
import { useState } from "react"
import { useGetVideoQuery } from "../api/videosApi"
import { NoResults } from "../../../components/NoResults"
import { Loader } from "../../../components/Loader"
import { bubbleSound } from "../../../utils/playSound"

export const VideoInfo = () => {
  const { videoId } = useParams()

  const { data: video, isLoading, isFetching } = useGetVideoQuery(videoId!)
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)

  if (isLoading || isFetching) {
    return <Loader />
  }

  if (!video) {
    return <NoResults />
  }

  const handleClick = (index: number) => {
    bubbleSound()
    setLoading(true)
    setIndex(index)
    setLoading(false)
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex basis-4/5 bg-[#133947] items-center justify-center min-h-[68vh] md:min-h-min max-h-[68vh] md:max-h-max md:h-[100vh]">
        <video
          className="max-h-[68vh] md:max-h-[100vh] transition-opacity duration-300"
          autoPlay
          loop
          controls
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          src={loading ? "" : video.video_files[index].link}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 basis-1/5">
        <div className="text-center">
          video by{" "}
          <span className="text-primary text-xl">{video.user.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span
            className={`${
              index === 0 ? "bg-secondary  text-black font-bold" : ""
            } border-2 p-1 text-center border-primary rounded cursor-pointer`}
            onClick={() => handleClick(0)}
          >
            1920 X 1080
          </span>
          <span
            className={`${
              index === 1 ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-primary rounded cursor-pointer`}
            onClick={() => handleClick(1)}
          >
            960 X 540
          </span>
          <span
            className={`${
              index === 2 ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-primary rounded cursor-pointer`}
            onClick={() => handleClick(2)}
          >
            1280 X 720
          </span>
          <span
            className={`${
              index === 3 ? "bg-secondary text-black font-bold" : ""
            } border-2 p-1 text-center border-primary rounded cursor-pointer`}
            onClick={() => handleClick(3)}
          >
            640 X 360
          </span>
        </div>
      </div>
    </div>
  )
}
