import { NextApiRequest, NextApiResponse } from "next";

import { testimonials } from "data/testimonials";

export default function getTestimonials(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(testimonials);
}
