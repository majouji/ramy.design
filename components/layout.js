import GlobalHead from "./head"
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "./footer";
import GlobalNav from "./global-nav";
import Example from './card'

const name = "@majouji";
export const siteTitle = "Ramy Majouji, Product Designer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/ramy.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className="siteTitleHeader">{name}</h1>
            <GlobalNav></GlobalNav>
              <p>
                <a
                  href="https://twitter.com/majouji?ref_src=twsrc%5Etfw"
                  class="twitter-follow-button"
                  data-dnt="true"
                  data-show-count="false"
                >
                  Follow @majouji
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </p>
          </>
        ) : ( // If not the home page
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/ramy.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <GlobalNav></GlobalNav>
          </>
        )}
      </header>
      <Link href="/work/square">
        <a>
          <Example></Example>
          <Example></Example>
        </a>
      </Link>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}
