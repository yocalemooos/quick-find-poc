import React from 'react';
import App from './App.tsx';
import './index.css';
import Application, {
  Application as ApplicationClass,
  ApplicationEntity,
  ApplicationEventType,
} from './common/application/index.ts';
import ReactDOM from 'react-dom/client';

declare global {
  interface Window {
    YocaleFinder: ApplicationClass;
  }
}

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

export { Application, ApplicationEntity, ApplicationEventType };

window.YocaleFinder = window.YocaleFinder || Application;
