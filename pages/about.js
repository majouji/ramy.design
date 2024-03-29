import Layout, { siteTitle } from "../components/layout"
import Head from "next/head"

export default function About() {
  return (
    <Layout children>
      <Head>
        <title>About &ndash; {siteTitle}</title>
      </Head>
      <h3>Hi, I’m Ramy. Welcome to my home online.</h3>
      <aside>
       <div className="table-row">
          <div className="column">
            <span className="table-header">Direction</span>
          </div>
          <div className="column">
            <span className="table-value">John Smith</span>
          </div>
        </div>
        <div className="table-row">
          <div className="column">
            <span className="table-header">Direction</span>
          </div>
          <div className="column">
            <span className="table-value">John Smith</span>
          </div>
        </div>
        <div className="table-row">
          <div className="column">
            <span className="table-header">Direction</span>
          </div>
          <div className="column">
            <span className="table-value">John Smith</span>
          </div>
        </div>
      </aside>
      <p>
        I hail from Montréal, Canada where I studied graphic design and
        developed a strong interest technology, design, and editorial
        photography very early on.
      </p>
      <p>
        I have spent the last 8 years building digital products and apps at
        companies like Square, Codecademy, Citymaps (acquired by TripAdvisor in
        2016), Busbud, and the National Film Board of Canada. Currently, I am a
        Product Designer at Glossier, building brand new experiences for beauty
        world. Products and contributions of mine have been highlighted by
        publications such as Fast Company, Fonts in Use, CBC/Radio-Canada, Condé
        Nast, and Y Combinator.
      </p>
      <p>
        As a photographer, I’ve been consistently creating personal work for the
        past 10 years — with a strong focus on editorial and travel photography
        — and have seen some of it published by Forbes, Yahoo Finance, and Built
        in NYC.
      </p>
    </Layout>
  );
}
