import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { injectJsonLd } from './lib/seo';
import './styles/globals.css';

injectJsonLd();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
