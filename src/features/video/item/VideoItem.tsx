import { pebbleSound } from "../../../utils/playSound"
import { Video } from "../types"
import { useNavigate } from "react-router-dom"

interface VideoItemProps {
  video: Video
}
export const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const navigate = useNavigate()
  return (
    <img
      onMouseOver={pebbleSound}
      onClick={() => {
        pebbleSound()
        navigate(`/video/${video.id}`)
      }}
      className="cursor-pointer transform z-0 shadow-2xl hover:scale-125 hover:z-10 hover:shadow-black transition-all duration-300 rounded"
      src={video.image}
    />
  )
}
