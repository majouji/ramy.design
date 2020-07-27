export default function Footer() {
  function getCurrentYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n
  }

  let currentYear = getCurrentYear()

  return (
    <footer>
      <hr />
      <p>&copy; 2008&ndash;{currentYear} Ramy Majouji</p>
      <p>
        Hosted with <a href="https://vercel.com">Vercel</a>, built in <a href="http://nextjs.org">Next.js</a> · Source on <a href="https://github.com/majouji">Github</a>
        <br />
        This website does not collect analytics
      </p>
    </footer>
  );
}
