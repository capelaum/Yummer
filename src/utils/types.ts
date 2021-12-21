export type ProductTypes = "cookie" | "toast" | "juice";

export type Size = 100 | 45;

export interface Product {
  id: number;
  type: ProductTypes;
  name: string;
  description: string;
  price: number;
  priceFormated?: string;
  imageSrc: string;
  size?: Size;
}

export interface Information {
  title: string;
  text: string;
  list: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  imageSrc: string;
  nick: string;
  link: string;
}
