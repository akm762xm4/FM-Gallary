import { Loader } from "../../../components/Loader"
import { useGetCollectionsQuery } from "../api/collectionApi"
import { CollectionItem } from "../item/CollectionItem"

export const CollectionList = () => {
  const { data: collections, isLoading, isFetching } = useGetCollectionsQuery()

  if (!collections || isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
      {collections?.map((collection) => {
        return <CollectionItem key={collection.id} collection={collection} />
      })}
    </div>
  )
}
