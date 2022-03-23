import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from '@/components/App';
import '@/styles/index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
