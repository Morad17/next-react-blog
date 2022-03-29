import { getAllPosts } from '../lib/posts'
import Link from 'next/link'

const BlogPostPreview = ({posts}) => {


    return(
      <div className="blog-post">
        <h2 className="post-title">
            <Link href={`/blog/${posts.slug}`}>
                <a>{posts.title}</a>
            </Link></h2>
        <div className="post-author">
          <img src={posts.authorImage} alt="image" />
          <p className="author">{posts.author}</p>
          <p className="date-published">{posts.publishDate}</p>
        </div>
        
        <div className="post-description">
          {posts.content}
        </div>
      </div>
    )
  }

  export default BlogPostPreview