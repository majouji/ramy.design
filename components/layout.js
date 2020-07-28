import styles from "./styles/layout.module.sass";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

export const siteTitle = "Ramy Majouji";
export const metaDescription =
  "Ramy Majouji is a product designer and developer in New York, currently at Glossier.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
