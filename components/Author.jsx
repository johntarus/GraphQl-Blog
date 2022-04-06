import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-2 -top-14">
        <img
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
          src={author.photo.url}
        />
        <h3 className="text-white" my-4 text-bold text-xl>
          {author.name}
        </h3>
      </div>
    </div>
  )
}

export default Author
