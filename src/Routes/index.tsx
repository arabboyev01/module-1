import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from '../components/HomePage';
import Search from '../components/Search';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/:page" element={<HomeComponent />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default Routers;
