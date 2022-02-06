import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container } from "./styles";

interface FooterCenterProps {
  children?: ReactNode;
}

export function FooterCenter({ children }: FooterCenterProps) {
  const router = useRouter();

  function setLinkText() {
    return router.pathname === "/cart" ? "Home" : "Início";
  }

  function setLink() {
    return router.pathname === "/cart" ? "/#menu" : "/#banner";
  }
  return (
    <Container>
      <Link href={setLink()} passHref>
        <button title={setLinkText()} onClick={setLink}>
          {setLinkText()}
        </button>
      </Link>
      {children}
    </Container>
  );
}
