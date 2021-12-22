import { NextApiRequest, NextApiResponse } from "next";

import { testimonials } from "data/testimonials";

export function getTestimonials() {
  return testimonials;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(testimonials);
}
