import { createAction, createReducer, current, nanoid } from '@reduxjs/toolkit'
import { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'
import { start } from 'repl'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

export const addPost = createAction('blog/addPost', (post: Post) => {
  return {
    payload: {
      ...post,
      id: nanoid()
    } 
  }
})
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('blog/startEditingPost')
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const idDelete = state.postList.findIndex((p) => p.id === postId)
      if (idDelete !== -1) {
        state.postList.splice(idDelete, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const idEdit = action.payload
      const editingPost = state.postList.find((post) => post.id === idEdit) || null
      state.editingPost = editingPost
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const idPost = action.payload.id
      const idFinishEditingPost = state.postList.findIndex((post) => post.id === idPost)
      state.postList.splice(idFinishEditingPost, 1, action.payload)
      state.editingPost = null
    })
    .addMatcher(
      (action) => action.type.includes('start'),
      (state, action) => {
        console.log(current(state))
      }
    )
})

export default blogReducer
