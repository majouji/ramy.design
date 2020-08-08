import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { metaDescription } from "../components/layout";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <meta name="description" content={metaDescription} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section>
        <p>
          Product Designer, currently building new things at Glossier in New
          York. Previously from Square, Codecademy, and Cadre. Sharing
          photography, tech tips, random quotes, and other nonsense here since
          2008.
        </p>
      </section>
      <section>
        <h2>Posts</h2>
        <ul className="posts-list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="post-title" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
