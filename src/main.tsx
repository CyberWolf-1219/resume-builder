import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import FormDataContextProvider from './contexts/FormDataContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormDataContextProvider>
      <App />
    </FormDataContextProvider>
  </React.StrictMode>
);
