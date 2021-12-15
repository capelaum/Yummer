import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "../database";

export default function getProduct(req: NextApiRequest, res: NextApiResponse) {
  const productId = +req.query.id;

  const product = menu.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      statusCode: 404,
      message: "Product not found",
    });
  }

  return res.status(200).json(product);
}
