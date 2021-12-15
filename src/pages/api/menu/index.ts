import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "../database";

import { formatPrice } from "utils/format";

export default function getMenu(req: NextApiRequest, res: NextApiResponse) {
  const menuFormated = menu.map((product) => ({
    ...product,
    priceFormated: formatPrice(product.price),
  }));

  res.status(200).json(menuFormated);
}
