import { cookieType } from "../../utils/types";
import { CookiesContainer } from "./styles";

import styles from "./styles.module.scss";

interface CookiesProps {
  cookies: cookieType[];
}

export function Cookies({ cookies }: CookiesProps) {
  function renderCookies(cookies: cookieType[]) {
    return cookies.map(({ name, size, price, description }) => (
      <div className="cookieItem" key={`${name}-${size}`}>
        <header>
          <h2>{name}</h2>
          <span>{price}</span>
        </header>
        <p>{description}</p>
      </div>
    ));
  }

  return <CookiesContainer>{renderCookies(cookies)}</CookiesContainer>;
}
