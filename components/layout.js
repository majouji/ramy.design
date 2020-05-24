import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "./footer";
import GlobalNav from "./global-nav";
import ButtonInternal from "./button";

const name = "@majouji";
export const siteTitle = "Ramy Majouji, Product Designer";
export const metaDescription =
  "Ramy Majouji is a product designer and developer in New York, currently at Glossier.";

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
                className="twitter-follow-button"
                data-dnt="true"
                data-show-count="false"
              >
                Follow @majouji
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </p>
          </>
        ) : (
          // If not the home page
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
      <ButtonInternal
        label="My Production Button"
        url="/work/square"
      ></ButtonInternal>
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
