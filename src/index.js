import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './pages/App';
import Header from './layouts/Header';

import './assets/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
)