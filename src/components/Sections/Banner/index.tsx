import Image from "next/image";
import Link from "next/link";

import { images } from "constants/images";

import { BannerImages } from "./BannerImages";

import { BannerContainer, BannerHeader, Shape } from "./styles";

export function Banner() {
  return (
    <BannerContainer id="banner">
      <BannerHeader>
        <div className="yummer_logo">
          <Image src={images.yummer_logo} alt="Yummer Logo" priority />
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
            src={images.shape_left}
            alt="shape left"
            layout="responsive"
            priority
          />
        </div>
        <div className="shape_right">
          <Image
            src={images.shape_right}
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
