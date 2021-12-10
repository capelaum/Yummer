export type cookieType = {
  name: string;
  size: number;
  description: string;
  price: string | number;
};

export type toastType = Omit<cookieType, "size">;
export type juiceType = Omit<cookieType, "size">;
