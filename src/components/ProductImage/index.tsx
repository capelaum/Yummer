import { useEffect, useState } from "react";
import Image from "next/image";

import useWindowDimensions from "hooks/useWindowDimensions";

import { ImageContainer, ImageOverlay } from "./styles";

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
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setImageSize();
  });

  function setImageSize(isOverlayOpen: boolean = false) {
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

  function setOverlayImageSize(isWidth: boolean = false) {
    let imageWidth: number = 300,
      imageHeight: number = 300;

    switch (type) {
      case "cookie":
        imageWidth = 300;
        imageHeight = 300;
        break;
      case "toast":
        imageWidth = 300;
        imageHeight = 170;
        break;
      case "juice":
        imageWidth = 300;
        imageHeight = 300;
        break;
    }

    return isWidth ? imageWidth : imageHeight;
  }

  function openOverlay() {
    if (width > 768) {
      setIsOpen(true);
      setImageSize(true);
      document.body.style.overflow = "hidden";
    }
  }

  function closeOverlay() {
    setIsOpen(false);
    setImageSize(false);
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <ImageContainer onClick={openOverlay}>
        <Image
          src={`/${type}/${imageSrc}`}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          title={name}
          // placeholder="blur"
          // blurDataURL={`/${type}/${imageSrc}`}
        />
      </ImageContainer>

      <ImageOverlay isOpen={isOpen} onClick={closeOverlay}>
        <Image
          src={`/${type}/${imageSrc}`}
          alt={name}
          width={setOverlayImageSize(true)}
          height={setOverlayImageSize()}
          title={name}
        />
      </ImageOverlay>
    </>
  );
}
