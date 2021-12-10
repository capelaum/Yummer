import styles from "./styles.module.scss";

interface CookiesProps {
  cookies: cookieType[];
}

export type cookieType = {
  name: string;
  size: number;
  description: string;
  price: number;
};

export function Cookies({ cookies }: CookiesProps) {
  function renderCookies(cookies: cookieType[]) {
    return cookies.map(({ name, size }) => <li key={`${name}-${size}`}>{name}</li>);
  }

  return <div className={styles.cookies}>{renderCookies(cookies)}</div>;
}
