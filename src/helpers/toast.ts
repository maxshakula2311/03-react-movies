import toast from "react-hot-toast";

export const notify = (message: string) => toast.error(message);

export const toastOptions = {
  className: "",
  style: {
    padding: "16px",
    color: "#0ac2b3",
  },
};