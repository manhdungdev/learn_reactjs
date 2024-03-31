import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../pages/blog/blog.slice'
import blogSlice from '../pages/blog/blog.slice'
export const store = configureStore({
  reducer: { blog: blogSlice }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
