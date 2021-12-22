import { toast } from "react-toastify";

import { MdOutlineAddShoppingCart } from "react-icons/md";

export const showToastError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showToastSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    theme: "colored",
  });
};

export const showToastInfo = (message: string) => {
  toast.info(message, {
    position: "bottom-right",
    theme: "colored",
    icon: MdOutlineAddShoppingCart,
  });
};

export const showToastWarn = (message: string) => {
  toast.warn(message, {
    position: "top-right",
    theme: "colored",
  });
};
