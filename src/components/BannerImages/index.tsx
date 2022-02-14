import { useState } from "react";
import Image from "next/image";

import main_cookies from "@public/Banner/main_cookies.png";
import main_toasts from "@public/Banner/main_toasts.png";
import main_juices from "@public/Banner/main_juices.png";

import main_cookies_mobile from "@public/Banner/main_cookies_mobile.png";
import main_toasts_mobile from "@public/Banner/main_toasts_mobile.png";
import main_juices_mobile from "@public/Banner/main_juices_mobile.png";

import { ProductTypes } from "utils/types";

import useInterval from "hooks/useInterval";
import useWindowDimensions from "hooks/useWindowDimensions";

import { MainImage } from "./styles";

const bannerImages = [
  {
    id: 1,
    src: main_cookies,
    mobileSrc: main_cookies_mobile,
    alt: "Cookies",
    type: "cookie",
  },
  {
    id: 2,
    src: main_toasts,
    mobileSrc: main_toasts_mobile,
    alt: "Rabanadas",
    type: "toast",
  },
  {
    id: 3,
    src: main_juices,
    mobileSrc: main_juices_mobile,
    alt: "Sucos",
    type: "juice",
  },
];

export function BannerImages() {
  const [active, setActive] = useState<ProductTypes>("cookie");
  const { width } = useWindowDimensions();

  useInterval(
    () => {
      switch (active) {
        case "cookie":
          setActive("toast");
          break;
        case "toast":
          setActive("juice");
          break;
        case "juice":
          setActive("cookie");
          break;
      }
    },
    width < 768 ? 2000 : 6000,
  );

  return (
    <>
      {bannerImages.map(({ id, src, mobileSrc, alt, type }) => (
        <MainImage key={id} isActive={active === type} isMobile={width < 768}>
          <Image
            src={width >= 768 ? src : mobileSrc}
            alt={`Yummer ${alt}`}
            title={`Yummer ${alt}`}
          />
        </MainImage>
      ))}
    </>
  );
}
