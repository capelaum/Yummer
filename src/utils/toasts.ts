import { ReactNode } from "react";
import { toast, ToastPosition } from "react-toastify";

export const showToast = (
  message: string,
  position: ToastPosition = "bottom-right",
  icon?: ReactNode,
) => {
  toast.success(message, {
    position,
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
