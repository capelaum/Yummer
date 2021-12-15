import { Product } from "./types";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function formatPrices(data: Product[]): Product[] {
  const dataFormated = data.map((item: Product) => {
    return {
      ...item,
      priceFormated: formatPrice(item.price),
    };
  });

  return dataFormated;
}
