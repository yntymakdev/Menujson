import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoute";
import ProductContext from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext>
    <BrowserRouter>
      <App />
      <MyRoutes />
    </BrowserRouter>
  </ProductContext>
);
