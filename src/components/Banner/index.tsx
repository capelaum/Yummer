import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import yummer_logo from "@public/Logos/yummer_logo.svg";
import shape_left from "@public/Banner/shape_left.svg";
import shape_right from "@public/Banner/shape_right.svg";

import main_cookies from "@public/Banner/main_cookies.png";
import main_juices from "@public/Banner/main_juices.png";
import main_toasts from "@public/Banner/main_toasts.png";

import main_cookies_mobile from "@public/Banner/main_cookies_mobile.png";
import main_juices_mobile from "@public/Banner/main_juices_mobile.png";
import main_toasts_mobile from "@public/Banner/main_toasts_mobile.png";

import { ProductTypes } from "utils/types";

import useInterval from "hooks/useInterval";

import { BannerContainer, MainImage, Shape } from "./styles";

export function Banner() {
  const [active, setActive] = useState<ProductTypes>("cookie");

  useInterval(() => {
    setActive(
      active === "cookie" ? "toast" : active === "toast" ? "juice" : "cookie",
    );
  }, 1500);

  return (
    <BannerContainer id="banner">
      <div className="yummer_logo">
        <Image src={yummer_logo} alt="Yummer Logo" priority />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero sit
        aliquam leo ullamcorper nisl.
      </p>
      <Link href="#menu" passHref>
        <button>Faça seu pedido</button>
      </Link>

      <Shape>
        <div className="shape_left">
          <Image src={shape_left} alt="shape left" layout="responsive" />
        </div>
        <div className="shape_right">
          <Image src={shape_right} alt="shape right" layout="responsive" />
        </div>

        <MainImage isActive={active === "cookie"}>
          <Image src={main_cookies} alt="Yummer Cookies" />
        </MainImage>
        <MainImage isActive={active === "toast"}>
          <Image src={main_toasts} alt="Yummer Rabanadas" />
        </MainImage>
        <MainImage isActive={active === "juice"}>
          <Image src={main_juices} alt="Yummer Sucos" />
        </MainImage>

        <MainImage isActive={active === "cookie"} isMobile>
          <Image src={main_cookies_mobile} alt="Yummer Cookies " />
        </MainImage>
        <MainImage isActive={active === "juice"} isMobile>
          <Image src={main_juices_mobile} alt="Yummer Sucos " />
        </MainImage>
        <MainImage isActive={active === "toast"} isMobile>
          <Image src={main_toasts_mobile} alt="Yummer Rabanadas " />
        </MainImage>
      </Shape>
    </BannerContainer>
  );
}
