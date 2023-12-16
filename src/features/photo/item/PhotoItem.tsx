import { pebbleSound } from "../../../utils/playSound"
import { Photo } from "../types"
import { useNavigate } from "react-router-dom"

interface PhotoItemProps {
  photo: Photo
}

export const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
  const navigate = useNavigate()
  return (
    <img
      className="cursor-pointer transform z-0 shadow-2xl hover:scale-125 hover:z-10 hover:shadow-black transition-all duration-300 rounded"
      src={photo.src.medium}
      onClick={() => {
        pebbleSound()
        navigate(`/photo/${photo.id}`)
      }}
      onMouseOver={pebbleSound}
      alt={photo.alt}
    />
  )
}
