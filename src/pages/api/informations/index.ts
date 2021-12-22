import { NextApiRequest, NextApiResponse } from "next";

import { informations } from "data/informations";

export function getInformations() {
  return informations;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(informations);
}
