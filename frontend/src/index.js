import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
      <PayPalScriptProvider options={{ clientId: "AfgE3q2-w90woBhMTTiP4doq5EIHcZz9-noW9Gjo2MDDLmm_Zv6JEHiFjJ1h-EQQB1zY8tYlXPLtJ9zV" }}>
        <App />
      </PayPalScriptProvider>
      </BrowserRouter>
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
