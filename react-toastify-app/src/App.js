import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home/Home";

// Import your Home component or any other components you want to route to

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
      <ToastContainer /> {/* Place ToastContainer outside of routes */}
    </div>
  );
}

export default App;
