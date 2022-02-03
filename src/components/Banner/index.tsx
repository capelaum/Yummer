import { ForwardedRef, forwardRef, RefObject } from "react";
import Image from "next/image";

import yummer_logo from "@public/Logos/yummer_logo.svg";
import shape_left from "@public/Banner/shape_left.svg";
import shape_right from "@public/Banner/shape_right.svg";

import { BannerImages } from "components/BannerImages";

import { BannerContainer, BannerHeader, Shape } from "./styles";

interface BannerProps {
  scrollToRef: (ref: RefObject<HTMLElement>) => void;
  menuRef: RefObject<HTMLElement>;
}

export const Banner = forwardRef(
  ({ scrollToRef, menuRef }: BannerProps, ref: ForwardedRef<HTMLElement>) => {
    return (
      <BannerContainer id="banner" ref={ref}>
        <BannerHeader>
          <div className="yummer_logo">
            <Image src={yummer_logo} alt="Yummer Logo" priority />
          </div>

          <p>
            Viemos fazer com que você não consiga mais viver sem as nossas
            delícias! Está preparado para compartilhar aquele #momentoyummer?!
          </p>
          <button onClick={() => scrollToRef(menuRef)}>Faça seu pedido</button>
        </BannerHeader>

        <Shape>
          <div className="shape_left">
            <Image
              src={shape_left}
              alt="shape left"
              layout="responsive"
              priority
            />
          </div>
          <div className="shape_right">
            <Image
              src={shape_right}
              alt="shape right"
              layout="responsive"
              priority
            />
          </div>

          <BannerImages />
        </Shape>
      </BannerContainer>
    );
  },
);

Banner.displayName = "Banner";
