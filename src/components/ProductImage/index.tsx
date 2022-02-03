import { useEffect, useState } from "react";
import Image from "next/image";

import useWindowDimensions from "hooks/useWindowDimensions";

import { ImageContainer } from "./styles";

interface ProductImageProps {
  name: string;
  type: string;
  imageSrc: string;
  menuType: "menu" | "cart";
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
          imageWidth = 150;
          imageHeight = 150;
          break;
      }
    }

    if (menuType === "cart") {
      switch (type) {
        case "cookie":
          imageWidth = 60;
          imageHeight = 60;
          break;
        case "toast":
          imageWidth = 80;
          imageHeight = 50;
          break;
        case "juice":
          imageWidth = 60;
          imageHeight = 60;
          break;
      }
    }

    setImageWidth(imageWidth);
    setImageHeight(imageHeight);
    return { imageWidth, imageHeight };
  }

  return (
    <ImageContainer>
      <Image
        src={`/${type}/${imageSrc}`}
        alt={name}
        width={imageWidth}
        height={imageHeight}
        title={name}
        placeholder="blur"
        blurDataURL={`/${type}/${imageSrc}`}
      />
    </ImageContainer>
  );
}
