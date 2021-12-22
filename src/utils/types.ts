export type ProductTypes = "cookie" | "toast" | "juice";

export type Size = 100 | 45;

export interface MenuFormated {
  cookies: Product[];
  toasts: Product[];
  juices: Product[];
}

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

export interface CartFormated {
  cookies: CartProduct[];
  toasts: CartProduct[];
  juices: CartProduct[];
}

export interface CartProduct extends Product {
  amount: number;
}

export interface CartItemsAmount {
  [key: number]: number;
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
