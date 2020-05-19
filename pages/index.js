import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}, Product Designer</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Product Designer, currently building new things at <a class="glossierLink" href="https://glossier.com" target="blank">Glossier</a> in New York. Previously from Square, Codecademy, and Cadre. Sharing photography, tech tips, random quotes, and other nonsense here since 2008.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href="/posts/[id]" as={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
      <section>
      <p>
        <a href="https://twitter.com/majouji?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-dnt="true" data-show-count="false">Follow @majouji</a>
        <script
          async src="https://platform.twitter.com/widgets.js" charset="utf-8">
        </script>
      </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}