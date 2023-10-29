import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from '../components/HomePage';
import Search from '../components/Search';
import { Navigate } from 'react-router-dom';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/:page" element={<HomeComponent />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default Routers;
