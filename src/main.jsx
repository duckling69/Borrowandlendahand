import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-h8t8mfag6tjhntcr.us.auth0.com"
    clientId="tFeYafankxo8kjSbuVFo1sFWee3mQKpi"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);