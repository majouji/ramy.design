xwimport Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import AppleMusicEmbed from "../components/embeds/apple-music";
import SpotifyEmbed from "../components/embeds/spotify"

export default function About() {
  return (
    <Layout children>
      <Head>
        <title>About &ndash; {siteTitle}</title>
      </Head>
      <h3>Hi, I’m Ramy. Welcome to my home online.</h3>
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
      <AppleMusicEmbed
        url="https://embed.music.apple.com/us/playlist/arabic/pl.u-drXjC9Wl0a"
      />
      <SpotifyEmbed
        url="https://open.spotify.com/embed/album/73b3NhgAXQiC6fmbR0Y2CA"
      />
    </Layout>
  );
}