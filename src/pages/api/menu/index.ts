import { NextApiRequest, NextApiResponse } from "next";
import { formatObjArray, formatPrice } from "../../../utils/format";
import { menu } from "../database";

export default function getCookies(req: NextApiRequest, res: NextApiResponse) {
  const { cookies, toasts, juices } = menu;

  const cookiesFormat = formatObjArray(cookies);
  const toastsFormat = formatObjArray(toasts);
  const juicesFormat = formatObjArray(juices);

  res.status(200).json({
    cookies: cookiesFormat,
    toasts: toastsFormat,
    juices: juicesFormat,
  });
}
