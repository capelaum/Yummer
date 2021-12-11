import { NextApiRequest, NextApiResponse } from "next";

import { menu } from "../database";

import { formatPrices } from "../../../utils/format";

export default function getCookies(req: NextApiRequest, res: NextApiResponse) {
  const { cookies, toasts, juices } = menu;

  const cookiesFormat = formatPrices(cookies);
  const toastsFormat = formatPrices(toasts);
  const juicesFormat = formatPrices(juices);

  res.status(200).json({
    cookies: cookiesFormat,
    toasts: toastsFormat,
    juices: juicesFormat,
  });
}
