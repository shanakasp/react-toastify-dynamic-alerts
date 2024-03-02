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

  // Add a useEffect hook to reset the message, type, and alertTitle states
  React.useEffect(() => {
    setMessage("");
    setType("");
    setAlertTitle("");
  }, [message, type, alertTitle]);

  return (
    <div>
      <Toast title={alertTitle} message={message} type={type} />
      <button onClick={handleClick1}>Success</button>
      <button onClick={handleClick2}>Warning</button>
      <button onClick={handleClick3}>Error</button>
    </div>
  );
};

export default Home;
