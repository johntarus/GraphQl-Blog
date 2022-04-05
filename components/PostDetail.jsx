import React from 'react'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img src={post.featuredImage.url} alt={post.title} />
      </div>
    </div>
  )
}

export default PostDetail
