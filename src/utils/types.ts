export type cookieType = {
  name: string;
  size: number;
  description: string;
  price: string | number;
  imageName: string;
};

export type toastType = Omit<cookieType, "size" | "imageName">;
export type juiceType = Omit<cookieType, "size" | "imageName">;
