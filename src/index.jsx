import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/style.css'

import Header from './layouts/Header';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import Temporary from './pages/Temporary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Temporary road for demonstration purposes */}
          <Route index element={<Temporary />} />

          <Route path="/:id" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)