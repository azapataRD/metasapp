import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Memoria from './servicios/Memoria.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memoria>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memoria>
  </StrictMode>
)
