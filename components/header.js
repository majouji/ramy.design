import Link from "next/link";
import { ButtonInternal } from "./button";

export default function Header() {
  return (
    <header>
      <nav>
        <ButtonInternal label="Home" url="/" />
        <ButtonInternal label="Work" url="/work/" />
      </nav>
    </header>
  );
}
