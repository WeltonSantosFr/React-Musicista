import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Providers } from "./GlobalRedux/provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Providers>
      <App />
    </Providers>
  </>
);
