import { toast } from "vue3-toastify";

const autoClose = 1000;

export const notifySuccess = () => {
  toast.success("toastify success", {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyError = () => {
  toast.error("toastify error", {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyInfo = () => {
  toast.info("toastify error", {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyWarn = () => {
  toast.warn("toastify warn", {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
