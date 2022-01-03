import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav-bar">
    <h2>FINFO</h2>
    <ul className="nav-links">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/forex">
        <li>Foreign Exchange</li>
      </NavLink>
      <NavLink to="/companies">
        <li>Company Rank</li>
      </NavLink>
    </ul>
  </div>
);

export default Nav;
