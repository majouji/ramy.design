import Layout, { siteTitle } from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import DisplayDate from "../../components/date"
import Head from "next/head"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>
          {postData.title} – {siteTitle}
        </title>
        <script src="/scripts/highlight.js" />
      </Head>
      <article>
        <h1 className="post-title">{postData.title}</h1>
        <div>
          <DisplayDate dateString={postData.date} />
        </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
