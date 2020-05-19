import Head from "next/head";
import siteTitle from "./layout"

export default function GlobalHead() {
  return (
    <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Ramy Majouji is a product designer in New York, currently at Glossier."
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}