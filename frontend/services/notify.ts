import { toast, updateGlobalOptions } from "vue3-toastify";

updateGlobalOptions({
  autoClose: 1000,
  position: toast.POSITION.BOTTOM_RIGHT,
  transition: toast.TRANSITIONS.SLIDE,
  newestOnTop: true,
  closeButton: false,
});

export const notifySuccess = (text: string) => {
  toast.success(`${text} Success`, {});
};

export const notifyError = (text: string) => {
  toast.error(`${text} Error`, {});
};

export const notifyInfo = (text: string) => {
  toast.info(`${text} Info`, {});
};

export const notifyWarn = (text: string) => {
  toast.warn(`${text} Warn`, {});
};
