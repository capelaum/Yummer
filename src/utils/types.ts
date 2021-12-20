export interface Product {
  id: number;
  type: ProductTypes;
  name: string;
  description: string;
  price: number;
  priceFormated?: string;
  imageName: string;
  size?: 100 | 45;
}

export type ProductTypes = "cookie" | "toast" | "juice";

export interface Information {
  title: string;
  text: string;
  list: string[];
}
speechSynthesis;
export interface Testimonial {
  text: string;
  author: string;
  imageSrc: string;
  nick: string;
  link: string;
}
