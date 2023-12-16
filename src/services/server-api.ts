import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com/v1",
    prepareHeaders: (headers: Headers) => {
      headers.set(
        "Authorization",
        "rDWzF5reRfpx6OkFtevnydqExh9mVuQ1MBvEQSgbFLGzsAA6iGN2g0yr"
      )
    },
  }),
  endpoints: () => ({}),
})
