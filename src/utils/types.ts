export type menuItemType = {
  name: string;
  size?: 100 | 45;
  description: string;
  price: string | number;
  imageName: string;
};

export type itemType = "cookies" | "toasts" | "juices";

export interface Information {
  title: string;
  text: string;
  list: string[];
}
