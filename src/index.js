import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './i18n';
import './styles/style.css';
import './styles/adapt.css';
import { Suspense } from 'react';
import Preloader from './components/Preloader/Preloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Preloader/>}>
    <App/>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
