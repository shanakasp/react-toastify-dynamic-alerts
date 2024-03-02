import Button from "@mui/material/Button";
import React from "react";
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
    </div>
  );
};

export default Login;
