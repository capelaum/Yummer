import Image from "next/image";

import { Content, MenuItemContent } from "./styles";

import { AddCartButton } from "components/AddCartButton";
import useWindowDimensions from "hooks/useWindowDimensions";

interface CookieProps {
  name: string;
  description: string;
  price: string | number;
  imageName: string;
  itemType: string;
  imageWidth: number;
  imageHeight: number;
  isOrange: boolean;
}

export function MenuItem({
  name,
  price,
  description,
  imageName,
  itemType,
  imageWidth,
  imageHeight,
  isOrange,
}: CookieProps) {
  const { width } = useWindowDimensions();

  return (
    <MenuItemContent isOrange={isOrange}>
      <Content>
        <div className="menu_item_image">
          <Image
            src={`${process.env.url_local}/${itemType}/${imageName}`}
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
              <AddCartButton show={width > 768} />
            </div>

            <span>{price}</span>
          </header>
          <p>{description}</p>
        </div>
      </Content>

      <AddCartButton show={width <= 768} />
    </MenuItemContent>
  );
}
