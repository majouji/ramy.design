import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import Tweet from '../../components/tweet'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} – {siteTitle}</title>
      </Head>
      <article>
        <h1 className='post-title'>{postData.title}</h1>
        <Tweet></Tweet>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}