import { api } from "../../../services/server-api"
import { Video } from "../types"

const videoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    popularVideos: builder.query<Response, number>({
      query: (page) => `/videos/popular?page=${page || 1}&per_page=20`,
    }),
    getVideo: builder.query<Video, string>({
      query: (videoId) => `https://api.pexels.com/videos/videos/${videoId}`,
    }),
  }),
})

export const { usePopularVideosQuery, useGetVideoQuery } = videoApi

interface Response {
  next_page?: string
  videos: Video[]
}
