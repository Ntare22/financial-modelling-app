import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Companies';
import Forex from './Forex';
import Home from './Home';
import Nav from './Nav';

const NavComponent = () => {
  const NotMatch = () => (
    <>
      <div>
        No Match Found for the page
      </div>
    </>
  );
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavComponent;
