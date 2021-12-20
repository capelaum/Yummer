import { NextApiRequest, NextApiResponse } from "next";

import { informations } from "data/informations";

export default function getInformations(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(informations);
}
