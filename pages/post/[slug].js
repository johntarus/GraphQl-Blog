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
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12"></div>
    </div>
  )
}

export default postDetails
