import { useEffect, useState } from "react";
import Image from "next/image";

import { Container, Content, TextContent } from "./styles";

import { AddCartButton } from "components/AddCartButton";
import useWindowDimensions from "hooks/useWindowDimensions";

import { Product } from "utils/types";
import { generateShimmer } from "utils/shimmer";

interface MenuItemProps {
  product: Product;
  isOrange: boolean;
}

export function MenuItem({ product, isOrange }: MenuItemProps) {
  const { id, type, name, description, priceFormated, imageName } = product;
  const { width } = useWindowDimensions();
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    setImageSize(type);
  });

  function setImageSize(type: string) {
    let imageWidth: number, imageHeight: number;

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
        imageWidth = width > 768 ? 75 : 90;
        imageHeight = width > 768 ? 120 : 150;
        break;
    }

    setImageWidth(imageWidth);
    setImageHeight(imageHeight);
    return { imageWidth, imageHeight };
  }

  return (
    <Container>
      <Content>
        <div className="menu_item_image">
          <Image
            src={`/${type}/${imageName}`}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            layout="fixed"
            // loading="eager"
            // placeholder="blur"
            // blurDataURL={`data:image/svg+xml;base64,${generateShimmer(
            //   imageWidth,
            //   imageHeight,
            // )}`}
          />
        </div>

        <TextContent isOrange={isOrange}>
          <header>
            <div className="item_title">
              <h2>{name}</h2>
              <AddCartButton show={width > 768} productId={id} />
            </div>

            <span>{priceFormated}</span>
          </header>
          <p>{description}</p>
        </TextContent>
      </Content>

      <AddCartButton show={width <= 768} productId={id} />
    </Container>
  );
}
