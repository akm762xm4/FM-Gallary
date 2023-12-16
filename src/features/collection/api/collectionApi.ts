import { api } from "../../../services/server-api"
import { Collection, Media } from "../types"

const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<Collection[], void>({
      query: () => "/collections/featured",
      transformResponse: (res: { collections: Collection[] }) => {
        return res?.collections
      },
    }),
    getCollectionMedia: builder.query<MResponse, { cId: string; page: number }>(
      {
        query: (params) =>
          `/collections/${params.cId}?page=${params.page}&per_page=20`,
      }
    ),
  }),
})

export const { useGetCollectionsQuery, useGetCollectionMediaQuery } =
  collectionApi

interface MResponse {
  next_page?: string
  media: Media[]
}
