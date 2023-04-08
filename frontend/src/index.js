import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { AuthContextProvider } from './context/AuthContext';
import { BannerContextProvider } from './context/BannerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BannerContextProvider>
        <App />
      </BannerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
