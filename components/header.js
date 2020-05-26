import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/work/square">
            <a>Selected Projects</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
