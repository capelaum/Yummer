export type Product = {
  id: number;
  name: string;
  size?: 100 | 45;
  description: string;
  price: number;
  priceFormated?: string;
  imageName: string;
};

export type ProductType = "cookies" | "toasts" | "juices";

export interface Information {
  title: string;
  text: string;
  list: string[];
}
