import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "data/menu";

import { formatPrice } from "utils/format";

export function getMenuWithPriceFormated() {
  const menuFormated = menu.map((product) => ({
    ...product,
    priceFormated: formatPrice(product.price),
  }));

  return menuFormated;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const menuData = getMenuWithPriceFormated();
  res.status(200).json(menuData);
}
