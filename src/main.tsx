import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import utilMain from './utils/index.ts';
import leetcode from './leetcode/index.ts';
import App from './App.tsx';

utilMain();
leetcode();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
