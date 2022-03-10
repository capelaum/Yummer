import { useState } from "react";
import Image from "next/image";

import { images } from "constants/images";

import { ProductTypes } from "utils/types";

import useInterval from "hooks/useInterval";
import useWindowDimensions from "hooks/useWindowDimensions";

import { MainImage } from "./styles";

const bannerImages = [
  {
    id: 1,
    src: images.main_cookies,
    mobileSrc: images.main_cookies_mobile,
    alt: "Cookies",
    type: "cookie",
  },
  {
    id: 2,
    src: images.main_toasts,
    mobileSrc: images.main_toasts_mobile,
    alt: "Rabanadas",
    type: "toast",
  },
  {
    id: 3,
    src: images.main_juices,
    mobileSrc: images.main_juices_mobile,
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
    width < 768 ? 2000 : 4000,
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
