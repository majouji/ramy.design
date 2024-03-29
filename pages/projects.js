import Layout, { siteTitle } from "../components/layout"
import Head from "next/head"
import Card from "../components/card"

export default function Projects() {
  return (
    <Layout children>
      <Head>
        <title>Projects – {siteTitle}</title>
      </Head>
      <div className="grid grid-work">
        <Card
          title="Something With a Longer Name"
          subtitle="2013–2015"
          description="Redesigning Codecademy’s learning environment to unlock learning beyond HTML and CSS"
          src="/images/work/register.png"
          alt="Square Register"
          linkTo="/work/square"
        />
        <Card
          title="Square"
          subtitle="2013"
          description="Redesigning Codecademy’s learning environment to unlock learning beyond HTML and CSS"
          src="/images/work/register.png"
          alt="Square Register"
          linkTo="/work/square"
        />
        <Card
          title="Square"
          subtitle="2013"
          description="Redesigning Codecademy’s learning environment to unlock learning beyond HTML and CSS"
          src="/images/work/register.png"
          alt="Square Register"
          linkTo="/work/square"
        />
        <Card
          title="Square"
          subtitle="2013"
          description="Redesigning Codecademy’s learning environment to unlock learning beyond HTML and CSS"
          src="/images/work/register.png"
          alt="Square Register"
          linkTo="/work/square"
        />
      </div>
    </Layout>
  );
}