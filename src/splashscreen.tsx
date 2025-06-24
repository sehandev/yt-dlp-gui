import React from "react";
import ReactDOM from "react-dom/client";
import Splashscreen from "./components/Splashscreen";

ReactDOM.createRoot(document.getElementById("splashscreen-root") as HTMLElement).render(
  <React.StrictMode>
    <Splashscreen />
  </React.StrictMode>,
);
