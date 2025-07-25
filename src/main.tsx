import './index.css';
import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { JobProvider } from './context/JobContext';
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap your app here */}
      <JobProvider>
        <App />
      </JobProvider>
    </HashRouter>
  </React.StrictMode>
);
