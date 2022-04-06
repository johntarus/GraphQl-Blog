import React from 'react'

const Author = ({ author }) => {
  return (
    <img
      alt={author.name}
      height="100px"
      width="100px"
      className="rounded-full align-middle"
      src={author.url}
    />
  )
}

export default Author
