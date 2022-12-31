import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h8t8mfag6tjhntcr.us.auth0.com"
      clientId="tFeYafankxo8kjSbuVFo1sFWee3mQKpi"
      redirectUri={window.location.origin}
    >

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
