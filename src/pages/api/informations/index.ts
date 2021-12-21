import { NextApiRequest, NextApiResponse } from "next";

import { informations } from "data/informations";

export async function getInformations() {
  return informations;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const informtions = await getInformations();
  res.status(200).json(informtions);
}
