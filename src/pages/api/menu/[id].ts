import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "data/menu";

import { formatPrice } from "utils/format";

export default function getProduct(req: NextApiRequest, res: NextApiResponse) {
  const productId = +req.query.id;

  const product = menu.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product.priceFormated = formatPrice(product.price);

  return res.status(200).json(product);
}
