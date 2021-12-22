import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "data/menu";

import { formatPrice } from "utils/format";

export function getMenuFormated() {
  const menuFormated = menu.map((product) => ({
    ...product,
    priceFormated: formatPrice(product.price),
  }));

  return menuFormated;
}

export function getProductsType(type: string) {
  const menuFormated = getMenuFormated();

  return menuFormated.filter((product) => product.type === type);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const menuData = getMenuFormated();
  res.status(200).json(menuData);
}
