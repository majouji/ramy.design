import Link from "next/link";
import { ButtonInternal } from "./button";

export default function Header() {
  return (
    <header>
      <Link href="/"><a><h1 id="site-title">Ramy Majouji</h1></a></Link>
      <h5 id="site-subhead">Product Designer</h5>
      <nav>
        <ul>
          <li><Link href="/"><a>Blog</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
