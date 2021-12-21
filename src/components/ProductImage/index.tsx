import { useEffect, useState } from "react";
import Image from "next/image";

import { generateShimmer } from "utils/shimmer";

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
    setImageSize(type);
  });

  function setImageSize(type: string) {
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

  return (
    <Image
      src={`/${type}/${imageSrc}`}
      alt={name}
      width={imageWidth}
      height={imageHeight}
      title={name}
    />
  );
}
