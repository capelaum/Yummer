import { toast } from "react-toastify";

import { MdCancel, MdDelete } from "react-icons/md";

export const showToastSuccess = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
    // theme: "colored",
  });
};

export const showToastError = (message: string) => {
  toast.error(message, {
    position: "bottom-right",
    theme: "colored",
  });
};

export const showRemoveProductToast = (message: string) => {
  toast.warn(message, {
    position: "bottom-right",
    // theme: "colored",
  });
};

export const showToastWarn = (message: string) => {
  toast.warn(message, {
    position: "bottom-right",
    theme: "colored",
  });
};
