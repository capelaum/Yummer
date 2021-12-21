import { NextApiRequest, NextApiResponse } from "next";

import { testimonials } from "data/testimonials";

export async function getTestimonials() {
  return testimonials;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const testimonials = await getTestimonials();
  res.status(200).json(testimonials);
}
