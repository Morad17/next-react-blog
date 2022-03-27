import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Blog Page</title>
      </Head>
      <h1>Blog Page</h1>
      <div className="">
        <BlogPostPreview />
      </div>
    </div>
  )
}

const BlogPostPreview = () => {
  return(
    <div className="">
      <img src="" alt="" />
    </div>
  )
}