export default function Header() {
  return (
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
  )
}