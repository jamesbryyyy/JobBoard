import './index.css';
import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { JobProvider } from './context/JobContext';
import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap your app here */}
      <JobProvider>
        <App />
      </JobProvider>
    </BrowserRouter>
  </React.StrictMode>
);
