import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CustomToast.css"; // Import your custom CSS for styling

const Toast = ({ title, message, type }) => {
  useEffect(() => {
    if (message && type) {
      switch (type) {
        case "success":
          toast.success(<ToastContent title={title} message={message} />);
          break;
        case "warning":
          toast.warning(<ToastContent title={title} message={message} />);
          break;
        case "error":
          toast.error(<ToastContent title={title} message={message} />);
          break;
        default:
          toast(<ToastContent title={title} message={message} />);
      }
    }
  }, [title, message, type]);

  // We don't need to return anything here since ToastContainer should be rendered in the App component
  return null;
};

const ToastContent = ({ title, message }) => (
  <div className="custom-toast">
    <div className="toast-title">{title}</div>
    <div className="toast-message">{message}</div>
  </div>
);

export default Toast;
