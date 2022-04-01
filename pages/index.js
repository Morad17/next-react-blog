import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import BlogPostPreview from '../components/BlogPostPreview'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div className="home">
      <Head>
        <title>Blog Page</title>
      </Head>
      <h1>Blog Page</h1>
      <div className="all-posts">
        {posts.map((p, index )=> <BlogPostPreview postSlug={p.slug} posts={p.frontmatter} key={index}/>)}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from posts
  const files = fs.readdirSync(path.join('posts'))

  // get slug and frontmatter from posts
  const posts = files.map( (filename) => {
    // Create Slug
    const slug = filename.replace('.md', '')

    // Get Frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data:frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })


  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}
