import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="1082995543427-e6gjpk1t8qhogibgsgk3ephegvii1nld.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </GoogleOAuthProvider>
);
