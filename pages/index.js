import Head from 'next/head'

import { getAllPosts } from '../lib/posts'
import BlogPostPreview from '../components/BlogPostPreview'

export default function Home() {
  const posts = getAllPosts()
  return (
    <div className="home">
      <Head>
        <title>Blog Page</title>
      </Head>
      <h1>Blog Page</h1>
      <div className="all-posts">
        {posts.map((p)=> <BlogPostPreview posts={p} key={posts.id}/>)}
      </div>
    </div>
  )
}

