import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store, persistor } from './redux/store.js';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/Drink_master">
      <App />
      </BrowserRouter>
         </PersistGate>
    </Provider>
  </React.StrictMode>,
);
