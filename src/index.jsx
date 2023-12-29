import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/general-styles.scss';
import './styles/nav-menu.scss';
import { BlockScrollContext } from './context/BlockScrollContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
  <>
    <BlockScrollContext>
      <App />
    </BlockScrollContext>
  </>
  //  </React.StrictMode>
);
