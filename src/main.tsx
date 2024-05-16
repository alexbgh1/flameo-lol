import React from "react";
import ReactDOM from "react-dom/client";
import RouterProviderExtension from "./router.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProviderExtension />
  </React.StrictMode>
);
