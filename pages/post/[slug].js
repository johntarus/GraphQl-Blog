import React from 'react'
import { getPosts, getPostsDetails } from '../../services'
import {
  PostDetails,
  Categories,
  PostWidget,
  Comments,
  CommentsForm,
} from '../../components'

const postDetails = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky"></div>
        </div>
      </div>
    </div>
  )
}

export default postDetails
