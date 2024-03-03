import Button from "@mui/material/Button";
import React from "react";
import Swal from "sweetalert2";
import SweetAlertComponent from "../alertComponent/Alert";
import Toast from "../toast/Toast";

const Login = () => {
  const [alertTitle, setAlertTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  const handleClick = () => {
    setAlertTitle("User login");
    setMessage("User Login successfully.");
    setType("success");
  };

  const handleConfirmAction = () => {
    // Simulate deleting a file (you can replace this with your actual delete logic)
    deleteFile()
      .then(() => {
        // Display success message after file is deleted
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      })
      .catch((error) => {
        // Display error message if file deletion fails
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the file.",
          icon: "error",
        });
      });
  };

  // Function to simulate deleting a file (replace this with your actual delete logic)
  const deleteFile = () => {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous operation (e.g., HTTP request)
      setTimeout(() => {
        // Assume file is deleted successfully
        const deletionSuccessful = true;

        if (deletionSuccessful) {
          resolve();
        } else {
          reject(new Error("Failed to delete file."));
        }
      }, 1000); // Simulate 1 second delay
    });
  };

  React.useEffect(() => {
    setMessage("");
    setType("");
    setAlertTitle("");
  }, [message, type, alertTitle]);

  return (
    <div style={{ textAlign: "center" }}>
      <Toast title={alertTitle} message={message} type={type} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ margin: "10px" }}
      >
        Success
      </Button>{" "}
      <div>
        {" "}
        <SweetAlertComponent
          title="Are you sure to change?"
          text="You won't be able to revert this!"
          icon="question"
          confirmButtonText="Yes, delete it!"
          confirmAction={handleConfirmAction}
        />
      </div>
    </div>
  );
};

export default Login;

// "success": Represents a successful operation.
// "error": Represents an error or failure.
// "warning": Represents a warning or caution.
// "info": Represents an informational message.
// "question": Represents a question or inquiry.
