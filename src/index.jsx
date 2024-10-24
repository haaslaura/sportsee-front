import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/style.css'

import Header from './layouts/Header';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/user/:id" element={<Home />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)