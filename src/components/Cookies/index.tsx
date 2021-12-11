import { useState } from "react";

import { cookieType } from "../../utils/types";
import { Cookie } from "../Cookie";

import { Switch } from "../Switch";

import { CookiesContainer } from "./styles";

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

    return filteredCookies.map(
      ({ name, size, price, description, imageName }) => (
        <Cookie
          key={`${name}-${size}`}
          name={name}
          price={price}
          description={description}
          imageName={imageName}
        />
      ),
    );
  }

  return (
    <CookiesContainer>
      <Switch size={size} toggleSize={toggleSize} />
      {renderCookies(cookies, size)}
    </CookiesContainer>
  );
}
