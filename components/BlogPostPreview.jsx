import { getAllPosts } from '../lib/posts'

const BlogPostPreview = ({posts}) => {


    return(
      <div className="blog-post">
        <h2 className="post-title">{posts.title}</h2>
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