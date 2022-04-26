import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [Active, setActive] = useState(false)

  function toggleMenu() {
    setActive(!Active)
    if (Active) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-6">
        <div className="block flex items-center justify-between md:float-left">
          <Link href="/">
            <span className="cussor-pointer text-xl font-bold text-white sm:text-4xl">
              <Link href="/">GraphCMS Blog</Link>
            </span>
          </Link>
          <div className="md:invisible">
            <svg
              class="h-8 w-8 cursor-pointer"
              onClick={toggleMenu}
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold  text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
