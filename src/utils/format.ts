import { menuItemType } from "./types";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function formatPrices(data: menuItemType[]): menuItemType[] {
  const dataFormat = data.map((item: menuItemType) => {
    return {
      ...item,
      price: formatPrice(Number(item.price)),
    };
  });

  return dataFormat;
}
