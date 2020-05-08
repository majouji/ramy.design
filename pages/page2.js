import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Page 2 — {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
        </div>
        <p>Another page!</p>
        <a href="/">Go Back Home!</a>
      </section>
    </Layout>
  );
}
