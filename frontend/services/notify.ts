import { toast } from "vue3-toastify";

const autoClose = 1000;

const toastProperties = {
  autoClose: autoClose,
  position: toast.POSITION.BOTTOM_RIGHT,
  transition: toast.TRANSITIONS.SLIDE,
};

export const notifySuccess = (text: string) => {
  toast.success(`${text} Success`, toastProperties);
};

export const notifyError = (text: string) => {
  toast.error(`${text} Error`, toastProperties);
};

export const notifyInfo = (text: string) => {
  toast.info(`${text} Info`, toastProperties);
};

export const notifyWarn = (text: string) => {
  toast.warn(`${text} Warn`, toastProperties);
};
