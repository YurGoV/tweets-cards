import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

// import '@fontsource/roboto/300.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/tweets-cards'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
