import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message }) => {
  const notify = () => {
    toast(message);
  };

  return <button onClick={notify}>Show toast</button>;
};

export default Toast;
