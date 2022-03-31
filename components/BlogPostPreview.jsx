import Link from 'next/link'

const BlogPostPreview = ({ posts, postSlug }) => {


    return(
      <div className="blog-post">
        <div className="cover-image">
          <img src={posts.coverImage} alt="" />
        </div>
        <h2 className="post-title">
            <Link href={`/blog/${postSlug}`}>
                <a>{posts.title}</a>
            </Link></h2>
        <div className="post-author">
          <img src={posts.authorImage} alt="image" />
          <p className="author">{posts.author}</p>
          <p className="date-published">{posts.datePublished}</p>
        </div>
        
        <div className="post-description">
          {posts.content}
        </div>
      </div>
    )
  }

  export default BlogPostPreview