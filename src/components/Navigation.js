import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-bar">
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
);

export default Navigation;
