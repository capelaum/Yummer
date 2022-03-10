import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container } from "./styles";

interface CenterProps {
  children?: ReactNode;
}

export function Center({ children }: CenterProps) {
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
