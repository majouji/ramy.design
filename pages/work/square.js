import Layout, { siteTitle } from "../../components/layout"
import Head from "next/head"

export default function Square() {
  return (
    <Layout>
      <Head>
        <title>Square – {siteTitle}</title>
      </Head>
      <h1>Square</h1>
      <p className='lead-paragraph'>Plumbers, caterers, massage therapists, fitness studios and home inspectors have all ditched paper invoices in favour of getting paid faster with online credit card payments via Square.</p>
      <p>Stuff goes here.</p>
      <img className='work-screenshot' src='/images/work/square-order.png'></img>
      <p>A paragraph in between</p>
      <img className='work-screenshot flush-bottom' src='/images/work/market.png'></img>
    </Layout>
  )
}