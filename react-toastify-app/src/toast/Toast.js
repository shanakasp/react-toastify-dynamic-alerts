import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message, type }) => {
  useEffect(() => {
    if (message && type) {
      switch (type) {
        case "success":
          toast.success(message);
          break;
        case "warning":
          toast.warning(message);
          break;
        case "error":
          toast.error(message);
          break;
        default:
          toast(message);
      }
    }
  }, [message, type]);

  // We don't need to return anything here since ToastContainer should be rendered in the App component

  return null;
};

export default Toast;
