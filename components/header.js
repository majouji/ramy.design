import Link from "next/link";
import styles from "./styles/layout.module.sass";

export default function Header({ home, layout }) {
  return (
    <header className={styles.headerGrid}>
      <div className={styles.col1}>
        <ul>
          <li>
            <strong>Ramy Majouji</strong>
          </li>
          <li>Product Designer</li>
        </ul>
      </div>
      <nav className={styles.col2}>
        <ul>
          <li>Selected projects</li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.col3}>
        <ul>
          <li>About</li>
          <li>Colophon</li>
          <li>Get in touch</li>
        </ul>
      </nav>
    </header>
  );
}
