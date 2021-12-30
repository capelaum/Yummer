import { useEffect, useState } from "react";
import Image from "next/image";

import { generateShimmer } from "utils/shimmer";

import old from "@public/cookie/old.svg";
import double from "@public/cookie/double.svg";
import coffee from "@public/cookie/coffee.svg";
import lemon from "@public/cookie/lemon.svg";

import piloto from "@public/toast/piloto.svg";
import doce_imperador from "@public/toast/doce_imperador.svg";
import dona_avelina from "@public/toast/dona_avelina.svg";

import pink_lemonade from "@public/juice/pink_lemonade.svg";
import amora_limao from "@public/juice/amora_limao.svg";
import black_tea from "@public/juice/black_tea.svg";
import laranja_acerola from "@public/juice/laranja_acerola.svg";

import useWindowDimensions from "hooks/useWindowDimensions";

interface ProductImageProps {
  name: string;
  type: string;
  imageSrc: string;
  menuType: "menu" | "cartDesktop" | "cartMobile";
}

export function ProductImage({
  name,
  type,
  imageSrc,
  menuType,
}: ProductImageProps) {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setImageSize();
  });

  function setImageSize() {
    let imageWidth: number = 100,
      imageHeight: number = 100;

    if (menuType === "menu") {
      switch (type) {
        case "cookie":
          imageWidth = width > 768 ? 100 : 150;
          imageHeight = width > 768 ? 100 : 150;
          break;
        case "toast":
          imageWidth = width > 768 ? 150 : 220;
          imageHeight = width > 768 ? 80 : 130;
          break;
        case "juice":
          imageWidth = width > 768 ? 78 : 100;
          imageHeight = width > 768 ? 120 : 150;
          break;
      }
    }

    if (menuType === "cartDesktop") {
      imageWidth = 100;
      imageHeight = 100;
    }

    if (menuType === "cartMobile") {
      imageWidth = 60;
      imageHeight = 60;
    }

    setImageWidth(imageWidth);
    setImageHeight(imageHeight);
    return { imageWidth, imageHeight };
  }

  function setImage() {
    switch (type) {
      case "cookie":
        if (imageSrc === "old.svg") return old;
        if (imageSrc === "coffee.svg") return coffee;
        if (imageSrc === "double.svg") return double;
        if (imageSrc === "lemon.svg") return lemon;
        break;
      case "toast":
        if (imageSrc === "piloto.svg") return piloto;
        if (imageSrc === "dona_avelina.svg") return dona_avelina;
        if (imageSrc === "doce_imperador.svg") return doce_imperador;
        break;
      case "juice":
        if (imageSrc === "pink_lemonade.svg") return pink_lemonade;
        if (imageSrc === "amora_limao.svg") return amora_limao;
        if (imageSrc === "laranja_acerola.svg") return laranja_acerola;
        if (imageSrc === "black_tea.svg") return black_tea;
        break;
    }
  }

  return (
    <Image
      src={`/${type}/${imageSrc}`}
      alt={name}
      width={imageWidth}
      height={imageHeight}
      title={name}
      quality={50}
      priority
    />
  );
}
