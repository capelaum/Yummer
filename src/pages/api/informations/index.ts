import { NextApiRequest, NextApiResponse } from "next";

import { informations } from "../database";

export default function getCookies(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(informations);
}
