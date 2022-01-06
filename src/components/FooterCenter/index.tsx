import { ReactNode, RefObject } from "react";
import { useRouter } from "next/router";

import { Container } from "./styles";

interface FooterCenterProps {
  scrollToRef: (ref: RefObject<HTMLElement>) => void;
  bannerRef: RefObject<HTMLElement>;
  children?: ReactNode;
}

export function FooterCenter({
  scrollToRef,
  bannerRef,
  children,
}: FooterCenterProps) {
  const router = useRouter();

  function setLinkText() {
    return router.pathname === "/cart" ? "Home" : "Início";
  }
  function setLink() {
    return router.pathname === "/cart"
      ? router.push("/")
      : scrollToRef(bannerRef);
  }
  return (
    <Container>
      <button title={setLinkText()} onClick={setLink}>
        {setLinkText()}
      </button>
      {children}
    </Container>
  );
}
