import React from 'react'
import { getAllSlugs, getPostData } from '../../lib/posts'
import Link from 'next/link'

const BlogPost = (props) => {
    const { postData } = props
  return (
    <div className="blog-post">
        <h2 className="post-title">
            {postData.title}
        </h2>
        <div className="post-author">
          <img src={postData.authorImage} alt="image" />
          <p className="author">{postData.author}</p>
          <p className="date-published">{postData.publishDate}</p>
        </div>
        <div className="post-description">
          {postData.content}
        </div>
        <Link href="/">Back to Home</Link>
      </div>
  )
}

export default BlogPost

export const getStaticPaths = () => {
    const paths = getAllSlugs()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = ({ params }) => {
    const postData = getPostData(params.slug)
    return {
        props: {
            postData,
        }
    }
}