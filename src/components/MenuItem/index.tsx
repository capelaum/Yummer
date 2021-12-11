import Image from "next/image";

import { Content, MenuItemContent } from "./styles";

import { AddCartButton } from "components/AddCartButton";

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
  return (
    <MenuItemContent>
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

        <div>
          <header>
            <h2>{name}</h2>
            <span>{price}</span>
          </header>
          <p>{description}</p>
        </div>
      </Content>

      <AddCartButton />
    </MenuItemContent>
  );
}
