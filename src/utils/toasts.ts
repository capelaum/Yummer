import { ReactNode } from "react";
import { toast } from "react-toastify";

export const showToastSuccess = (message: string, icon?: ReactNode) => {
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

export const showToastWarn = (message: string, icon?: ReactNode) => {
  toast.warn(message, {
    position: "bottom-right",
    icon,
  });
};
