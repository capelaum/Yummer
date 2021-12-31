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

const bannerMainImages = [
  {
    src: main_cookies,
    mobileSrc: main_cookies_mobile,
    alt: "Cookies",
    type: "cookie",
  },
  {
    src: main_toasts,
    mobileSrc: main_toasts_mobile,
    alt: "Rabanadas",
    type: "toast",
  },
  {
    src: main_juices,
    mobileSrc: main_juices_mobile,
    alt: "Sucos",
    type: "juice",
  },
];

export function BannerMainImages() {
  const [active, setActive] = useState<ProductTypes>("cookie");
  const { width } = useWindowDimensions();

  useInterval(() => {
    setActive(
      active === "cookie" ? "toast" : active === "toast" ? "juice" : "cookie",
    );
  }, 1500);

  return (
    <>
      {bannerMainImages.map((mainImage, index) => (
        <MainImage key={index} isActive={active === mainImage.type}>
          <Image
            src={width >= 768 ? mainImage.src : mainImage.mobileSrc}
            alt={`Yummer ${mainImage.alt}`}
            title={`Yummer ${mainImage.alt}`}
          />
        </MainImage>
      ))}
    </>
  );
}
