export type Product = {
  id: number;
  type: string;
  name: string;
  description: string;
  price: number;
  priceFormated?: string;
  imageName: string;
  size?: 100 | 45;
};

export type ProductTypes = "cookie" | "toast" | "juice";

export interface Information {
  title: string;
  text: string;
  list: string[];
}
