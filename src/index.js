import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './i18n';
import './styles/style.css';
import './styles/adapt.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading..</div>}>
    <App/>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
