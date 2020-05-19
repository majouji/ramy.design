import Layout, { siteTitle } from "../../components/layout"
import Head from "next/head"

export default function Square() {
  return (
    <Layout>
      <Head>
        <title>Square – {siteTitle}</title>
      </Head>
      <h1>Square</h1>
      <p>Stuff goes here.</p>
    </Layout>
  )
}