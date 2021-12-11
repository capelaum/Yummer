import { useState } from "react";

import { cookieType } from "../../utils/types";
import { Switch } from "../Switch";

import { CookieItem, CookiesContainer } from "./styles";

interface CookiesProps {
  cookies: cookieType[];
}

export function Cookies({ cookies }: CookiesProps) {
  const [size, setSize] = useState<100 | 45>(100);

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function renderCookies(cookies: cookieType[], size: number) {
    const filteredCookies = cookies.filter((cookie) => cookie.size === size);

    return filteredCookies.map(({ name, size, price, description }) => (
      <CookieItem key={`${name}-${size}`}>
        <header>
          <h2>{name}</h2>
          <span>{price}</span>
        </header>
        <p>{description}</p>
      </CookieItem>
    ));
  }

  return (
    <CookiesContainer>
      <Switch size={size} toggleSize={toggleSize} />
      {renderCookies(cookies, size)}
    </CookiesContainer>
  );
}
