import { memo } from "react";

import { Product } from "utils/types";

import useWindowDimensions from "hooks/useWindowDimensions";

import { AddCartButton } from "components/AddCartButton";
import { ProductImage } from "components/ProductImage";

import { Container, Content, TextContent } from "./styles";
import { MdKeyboardArrowRight } from "react-icons/md";

interface MenuItemProps {
  product: Product;
  isOrange: boolean;
}

export function MenuItemComponent({ product, isOrange }: MenuItemProps) {
  const { id, type, name, description, priceFormated, imageSrc } = product;
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        <div className="menu_item_image">
          <ProductImage
            name={name}
            type={type}
            imageSrc={imageSrc}
            menuType="menu"
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

          {width > 768 ? (
            <p>{description}</p>
          ) : (
            <details>
              <summary>
                <MdKeyboardArrowRight size={20} />
                Descrição
              </summary>
              <p>{description}</p>
            </details>
          )}
        </TextContent>
      </Content>

      <AddCartButton show={width <= 768} productId={id} />
    </Container>
  );
}

export const MenuItem = memo(MenuItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product.size, nextProps.product.size);
});
