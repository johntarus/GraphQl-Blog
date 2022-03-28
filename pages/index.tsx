import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'

const posts = [
  { title: 'React Redux', excerpt: 'React with Redux' },
  { title: 'React & Tailwind', excerpt: 'React with Tailwind' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>GraphQl-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-4 lg:col-span-1">
          <div className="lg: rlative sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
