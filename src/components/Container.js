import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Stocks from './Stocks';
import Nav from './Nav';
import CompanyDetails from './CompanyDetails';

const Container = () => {
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
          <Route path="/" exact element={<Stocks />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<CompanyDetails />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
