import Image from "next/image";

import { Content, MenuItemContent } from "./styles";

import { AddCartButton } from "components/AddCartButton";
import useWindowDimensions from "hooks/useWindowDimensions";

import { Product } from "utils/types";

interface MenuItemProps {
  product: Product;
  imageWidth: number;
  imageHeight: number;
  isOrange: boolean;
}

export function MenuItem({
  product,
  imageWidth,
  imageHeight,
  isOrange,
}: MenuItemProps) {
  const { width } = useWindowDimensions();
  const { id, type, name, description, priceFormated, imageName } = product;

  return (
    <MenuItemContent isOrange={isOrange}>
      <Content>
        <div className="menu_item_image">
          <Image
            src={`${process.env.url_local}/${type}/${imageName}`}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            layout="fixed"
          />
        </div>

        <div className="content_container">
          <header>
            <div className="item_title">
              <h2>{name}</h2>
              <AddCartButton show={width > 768} productId={id} />
            </div>

            <span>{priceFormated}</span>
          </header>
          <p>{description}</p>
        </div>
      </Content>

      <AddCartButton show={width <= 768} productId={id} />
    </MenuItemContent>
  );
}
