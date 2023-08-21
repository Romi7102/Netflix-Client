import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { StoreProvider } from "./Context/StoreProvider.jsx";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.headers.common['Authorization'] = "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
