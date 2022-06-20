import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <NavLink className="nav-link" to="/">
        <h2>Bookstore CMS</h2>
      </NavLink>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
