import styles from "./styles/layout.module.sass"
import Link from "next/link";
import Footer from "./footer";
import GlobalNav from "./global-nav";

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
            <img className="header-photo" src="/images/ramy.jpg" alt={name} />
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
                <img className="header-photo" src="/images/ramy.jpg" alt={name} />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
            <GlobalNav></GlobalNav>
          </>
        )}
      </header>
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
