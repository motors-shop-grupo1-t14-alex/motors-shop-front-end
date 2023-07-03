import React from "react";
import { AdvertProvider } from "./contexts/advertContext/index.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AdvertProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdvertProvider>
  </React.StrictMode>
);
