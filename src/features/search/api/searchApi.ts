import { api } from "../../../services/server-api"
import { Photo } from "../../photo/types"

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    searchPhotos: builder.query<Response, { page: number; term: string }>({
      query: (params) =>
        `/search?query=${params.term || ""}&page=${
          params.page || 1
        }&per_page=20`,
    }),
  }),
})
interface Response {
  next_page?: string
  photos: Photo[]
}

export const { useSearchPhotosQuery } = searchApi
