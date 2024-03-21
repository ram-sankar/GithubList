import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Users from '../pages/Users'; // Assuming your home component is in 'Home.js'
import UserDetails from '../pages/UserDetails'; // Assuming your about component is in 'About.js'

function MainRoutes() {
  return ( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:userId" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MainRoutes;