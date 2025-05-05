import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// AOS import and initialization
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true,
  duration: 600,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
