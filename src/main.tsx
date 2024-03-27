import React from 'react';
import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import globalConfig from './common/globalConfig';

globalConfig.register();

const CONTAINER_ID = 'yocale-quick-find';

if (!document.getElementById(CONTAINER_ID)) {
  const container = document.createElement('div');
  container.id = CONTAINER_ID;
  document.body.appendChild(container);
}

ReactDOM.createRoot(document.getElementById(CONTAINER_ID)!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
