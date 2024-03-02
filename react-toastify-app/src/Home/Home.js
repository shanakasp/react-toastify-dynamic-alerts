import Button from "@mui/material/Button";
import React from "react";
import Toast from "../toast/Toast";

const Home = () => {
  const [alertTitle, setAlertTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  const handleClick1 = () => {
    setAlertTitle("User Profile");
    setMessage("User created successfully.");
    setType("success");
  };

  const handleClick2 = () => {
    setAlertTitle("Warning");
    setMessage("This is a warning message!");
    setType("warning");
  };

  const handleClick3 = () => {
    setAlertTitle("Error");
    setMessage("This is an error message!");
    setType("error");
  };

  // useEffect hook to reset the message, type, and alertTitle states
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
        onClick={handleClick1}
        style={{ margin: "10px" }}
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={handleClick2}
        style={{ margin: "10px" }}
      >
        Warning
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleClick3}
        style={{ margin: "10px" }}
      >
        Error
      </Button>
    </div>
  );
};

export default Home;
