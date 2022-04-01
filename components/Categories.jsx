import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="shaddow-lg mb-8 rounded-lg bg-white p-8 pb-12">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={'/category/${category.slug}'}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
