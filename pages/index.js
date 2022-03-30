import Head from 'next/head'
import { Categories, PostCard, PostWidget, Header } from '../components'
import { getPosts } from '../services'

// const posts = [
//   { title: 'React Redux', excerpt: 'React with Redux' },
//   { title: 'React & Tailwind', excerpt: 'React with Tailwind' },
// ]

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>GraphQl-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cols-12 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
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

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
