import { ReactNode } from "react";
import { toast } from "react-toastify";

export const showToast = (message: string, icon?: ReactNode) => {
  toast.success(message, {
    position: "bottom-right",
    icon,
  });
};

export const showToastError = (message: string, icon?: ReactNode) => {
  toast.error(message, {
    position: "bottom-right",
    theme: "colored",
    icon,
  });
};
