import { api } from "../../../services/server-api"
import { Photo } from "../types"

const photosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    curatedPhotos: builder.query<Response, number>({
      query: (page) => `curated/?page=${page}&per_page=20`,
    }),
    getPhoto: builder.query<Photo, string>({
      query: (photoId) => `/photos/${photoId}`,
    }),
  }),
})

export const { useCuratedPhotosQuery, useGetPhotoQuery } = photosApi

interface Response {
  next_page?: string
  photos: Photo[]
}
