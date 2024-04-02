import { createSlice } from '@reduxjs/toolkit'

interface BlogState {
  id: string
}

const initialState: BlogState = {
  id: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {}
})

const blogReducer = blogSlice.reducer
export default blogReducer
