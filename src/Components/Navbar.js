import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <nav>
    <h1 className="logo">Math Magician</h1>
    <p>by NR MNDEBELE</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="./pages/quotes">Motivation</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
