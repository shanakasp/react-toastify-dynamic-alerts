import React from "react";
import Toast from "../toast/Toast";

const Home = () => {
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  const handleClick1 = () => {
    setMessage("This is a success message!");
    setType("success");
  };

  const handleClick2 = () => {
    setMessage("This is a warn message!");
    setType("warn");
  };

  const handleClick3 = () => {
    setMessage("This is a error message!");
    setType("error");
  };

  // Add a useEffect hook to reset the message and type states
  React.useEffect(() => {
    setMessage("");
    setType("");
  }, [message, type]);

  return (
    <div>
      <Toast message={message} type={type} />
      <button onClick={handleClick1}>Success</button>
      <button onClick={handleClick2}>Warning</button>
      <button onClick={handleClick3}>Error</button>
    </div>
  );
};

export default Home;
