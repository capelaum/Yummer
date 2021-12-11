import Image from "next/image";

import { CookieItem } from "./styles";

import { AddCartButton } from "components/AddCartButton";

interface CookieProps {
  name: string;
  description: string;
  price: string | number;
  imageName: string;
}

export function Cookie({ name, price, description, imageName }: CookieProps) {
  return (
    <CookieItem>
      <div className="cookie_image">
        <Image
          src={`${process.env.url_local}/Cookies/${imageName}`}
          alt={name}
          width={100}
          height={100}
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

      <AddCartButton />
    </CookieItem>
  );
}
