import { AsyncThunk, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post } from '../../types/blog.type'
import http from '../../utils/http'

// type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
// type PendingAction = ReturnType<GenericAsyncThunk['pending']>
// type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
// type FullfilledAction = ReturnType<GenericAsyncThunk['fullfilled']>

type GernericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GernericAsyncThunk['pending']>
type RejectedAction = ReturnType<GernericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GernericAsyncThunk['fulfilled']>

interface BlogState {
  postList: Post[]
  editingPost: Post | null
  loading: boolean
  requestId: undefined | string
}

const initialState: BlogState = {
  postList: [],
  editingPost: null,
  loading: false,
  requestId: undefined
}

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
  const res = await http.get<Post[]>('posts', {
    signal: thunkAPI.signal
  })
  return res.data
})

export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkAPI) => {
  try {
    const res = await http.post<Post>('posts', body, {
      signal: thunkAPI.signal
    })
    console.log(res.data)
    return res.data
  } catch (err: any) {
    if (err.name === 'AxiosError' && err.response.status === 422) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
    throw err
  }
})

export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ postId, blog }: { postId: string; blog: Post }, thunkAPI) => {
    try {
      const res = await http.put(`posts/${postId}`, blog, {
        signal: thunkAPI.signal
      })
      return res.data
    } catch (err: any) {
      if (err.name === 'AxiosError' && err.response.status === 422) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
      throw err
    }
  }
)

export const deletePost = createAsyncThunk('blog/deletePost', async (id: string, thunkAPI) => {
  const res = await http.delete<Post>(`posts/${id}`, {
    signal: thunkAPI.signal
  })
  return res.data
})

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    startEditingPost: (state, action: PayloadAction<string>) => {
      const idEdit = action.payload
      const editingPost = state.postList.find((post) => post.id === idEdit) || null
      state.editingPost = editingPost
    },

    cancelEditingPost: (state) => {
      state.editingPost = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostList.fulfilled, (state, action) => {
        state.postList = action.payload
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postList.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const idPost = action.payload.id
        const index = state.postList.findIndex((post) => post.id === idPost)
        state.postList.splice(index, 1, action.payload)
        state.editingPost = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const id = action.payload.id
        const index = state.postList.findIndex((post) => post.id === id)
        state.postList.splice(index, 1)
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.requestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.loading && state.requestId === action.meta.requestId) {
            state.loading = false
          }
        }
      )

      .addDefaultCase((state, action) => {
        // console.log('default', current(state))
      })
  }
})

export const { cancelEditingPost, startEditingPost } = blogSlice.actions

export default blogSlice.reducer
