import { type VariantType } from "notistack";

let enqueue: (msg: string, options?: { variant: VariantType }) => void;

export const setEnqueueSnackbar = (
  enqueueFn: (msg: string, options?: { variant: VariantType }) => void
) => {
  enqueue = enqueueFn;
};

export const NotificationService = {
  success: (msg: string) => enqueue?.(msg, { variant: "success" }),
  error: (msg: string) => enqueue?.(msg, { variant: "error" }),
  info: (msg: string) => enqueue?.(msg, { variant: "info" }),
  warning: (msg: string) => enqueue?.(msg, { variant: "warning" }),
};
