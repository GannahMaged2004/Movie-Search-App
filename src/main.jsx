import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

// the render method is used to render the component to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
