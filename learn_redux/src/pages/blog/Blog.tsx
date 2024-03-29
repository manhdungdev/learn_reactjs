import React from 'react'
import CreatePost from './components/create-post'
import PostList from './components/post-list'

export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
