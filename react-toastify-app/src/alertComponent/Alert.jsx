// SweetAlertComponent.js

import React from "react";
import Swal from "sweetalert2";

const Alert = ({ title, text, icon, confirmButtonText, confirmAction }) => {
  const handleClick = () => {
    Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        confirmAction();
      }
    });
  };

  return <button onClick={handleClick}>Open SweetAlert</button>;
};

export default Alert;
