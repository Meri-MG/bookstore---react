import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <h2>Bookstore CMS</h2>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Books
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
