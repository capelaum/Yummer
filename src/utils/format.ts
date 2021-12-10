import { cookieType, juiceType, toastType } from "../components/Cookies";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

type dataType = cookieType | toastType | juiceType;

export function formatObjArray(data: dataType[]): dataType[] {
  const dataFormat = data.map((item: dataType) => {
    return {
      ...item,
      price: formatPrice(Number(item.price)),
    };
  });

  return dataFormat;
}
