import Image from "next/image";

import yummer_logo from "@public/Logos/yummer_logo.svg";
import shape_left from "@public/Banner/shape_left.svg";
import shape_right from "@public/Banner/shape_right.svg";

import { BannerImages } from "components/BannerImages";

import { BannerContainer, BannerHeader, Shape } from "./styles";
import Link from "next/link";

export function Banner() {
  return (
    <BannerContainer id="banner">
      <BannerHeader>
        <div className="yummer_logo">
          <Image src={yummer_logo} alt="Yummer Logo" priority />
        </div>

        <p>
          Viemos fazer com que você não consiga mais viver sem as nossas
          delícias! Está preparado para compartilhar aquele #momentoyummer?!
        </p>

        <Link href="/#menu" passHref>
          <button>Faça seu pedido</button>
        </Link>
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
}
