import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "../database";

export default function getProduct(req: NextApiRequest, res: NextApiResponse) {
  const { cookies, toasts, juices } = menu;
}
