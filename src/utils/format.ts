import { MenuFormated, Product } from "./types";

export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function getMenuFormated(menu: Product[]): MenuFormated {
  const cookies = menu.filter((p) => p.type === "cookie");
  const toasts = menu.filter((p) => p.type === "toast");
  const juices = menu.filter((p) => p.type === "juice");

  return { cookies, toasts, juices };
}

export function renderProductName(name: string, size: number): string {
  return size ? `${name} (${size}g)` : name;
}
