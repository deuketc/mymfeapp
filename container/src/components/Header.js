import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>MFE Container App</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products (React MFE)</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard (Vue MFE)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
