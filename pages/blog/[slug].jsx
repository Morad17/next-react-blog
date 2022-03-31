import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

import Link from 'next/link'

const BlogPost = ({
  frontmatter: {title, datePublished, cover_image, author, authorImage },
  slug, content
}) => {

  return (
    <div className="blog-post-content">
        <div className="content-cover-image">
          <img src={cover_image} alt="" />
        </div>
        <div className="content-title">{title}</div>
        <div className="content-author">
          <img src={authorImage} alt="author" />
          <p className="author">{author}</p>
          <p className="date-published">Posted: {datePublished}</p>
        </div>
        <section className="main-content" dangerouslySetInnerHTML={{ __html: marked(content) }}>
        </section>
          
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map( (file) => ({
    params: {slug: file.replace('.md', '')}
  }))

  console.log(paths)
  return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: {slug} }) {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const {data:frontmatter, content} = matter(markdownWithMeta)
    
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}