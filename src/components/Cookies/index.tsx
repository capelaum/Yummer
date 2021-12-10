import styles from "./styles.module.scss";

interface CookiesProps {
  cookies: cookieType[];
}

export type cookieType = {
  name: string;
  size: number;
  description: string;
  price: string | number;
};

export type toastType = Omit<cookieType, "size">;
export type juiceType = Omit<cookieType, "size">;

export function Cookies({ cookies }: CookiesProps) {
  function renderCookies(cookies: cookieType[]) {
    return cookies.map(({ name, size, price }) => (
      <div key={`${name}-${size}`}>
        <header>
          <h2>{name}</h2>
          <span>{price}</span>
        </header>
      </div>
    ));
  }

  return <div className={styles.cookies}>{renderCookies(cookies)}</div>;
}
