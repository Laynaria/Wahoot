import { toast } from "vue3-toastify";

const autoClose = 1000;

export const notifySuccess = (text) => {
  toast.success(`${text} Success`, {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyError = (text) => {
  toast.error(`${text} Error`, {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyInfo = (text) => {
  toast.info(`${text} Info`, {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const notifyWarn = (text) => {
  toast.warn(`${text} Warn`, {
    autoClose: autoClose,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
