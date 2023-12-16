import { generateRandomColor } from "../../../utils/randomColor"
import { Collection } from "../types"
import { useNavigate } from "react-router-dom"

interface CollectionItemProps {
  collection: Collection
}

export const CollectionItem: React.FC<CollectionItemProps> = ({
  collection,
}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`${collection?.id}`)}
      style={{
        backgroundImage: `linear-gradient(to bottom left, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`,
      }}
      className="flex flex-col items-center p-2 rounded cursor-pointer"
    >
      <div className="text-base md:text-xl text-black font-bold bg-transparent text-center">
        {collection.title}
      </div>
      <div className="text-xs md:text-base w-auto border border-black h-0  bg-transparent"></div>
      <div className="text-xs md:text-base bg-transparent">
        Items: {collection.media_count}
      </div>
      <div className="text-xs md:text-base bg-transparent">
        Photos: {collection.photos_count}
      </div>
      <div className="text-xs md:text-base bg-transparent">
        Videos: {collection.videos_count}
      </div>
    </div>
  )
}
