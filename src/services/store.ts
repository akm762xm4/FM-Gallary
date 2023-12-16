import { configureStore } from "@reduxjs/toolkit"
import { api } from "./server-api"
import { cloudinaryApi } from "../features/photo/api/uploadApi"
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [cloudinaryApi.reducerPath]: cloudinaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
