import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import QueryProvider from "./utils/reactQueryConfig.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
