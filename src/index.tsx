<<<<<<< HEAD:src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
=======
import App from "App";
import Providers from "Providers";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
>>>>>>> 5b9595b629a621be221c4c39f2900c82a4326141:src/index.tsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
