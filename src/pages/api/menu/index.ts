import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "data/menu";

import { formatPrice } from "utils/format";

export function getMenu() {
  const menuFormated = menu.map((product) => ({
    ...product,
    priceFormated: formatPrice(product.price),
  }));

  return menuFormated;
}

export async function getProductsType(type: string) {
  const menuFormated = getMenu();

  return menuFormated.filter((product) => product.type === type);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const menuData = await getMenu();
  res.status(200).json(menuData);
}
