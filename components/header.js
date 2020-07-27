import Link from "next/link";
import { ButtonInternal } from "./button";

export default function Header() {
  return (
    <header>
      <Link href="/"><a><h1>Ramy Majouji</h1></a></Link>
      <p>Product Designer</p>
      <nav>
        <ul>
          <li><Link href="/"><a>Blog</a></Link></li>
          <li><Link href="/work"><a>Work</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
