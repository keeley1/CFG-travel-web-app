import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Locations from '../locations';
import Home from '../home';
import Layout from '../components/layout';
import TravelRecs from '../travel-recs';

function NavBar() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="locations" element={<Locations />} />
            <Route path="travel-recs" element={<TravelRecs />} />;
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default NavBar;