import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css"
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
  <React.StrictMode>
<AuthContextProvider>


    <App />
    </AuthContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);
