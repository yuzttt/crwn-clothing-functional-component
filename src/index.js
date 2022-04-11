import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/product.context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/cart.context.jsx';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
