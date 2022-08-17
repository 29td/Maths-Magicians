import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../css/home.css';

const Home = () => (
  <div className="home-container">
    <Navbar />
    <main>
      <h1>Welcome Math Magician!</h1>
      <p className="home-text">
        Mathematics is the science and study of quality, structure, space, and change.
        Mathematicians seek out patterns, formulate new conjectures,
        and establish truth by rigorous deduction from appropriately chosen axioms and definitions.
      </p>
      <div className="ctc-btns">
        <Link to="/Calculator">
          <button type="button">Use Calculator</button>
        </Link>
        <Link to="./pages/quotes">
          <button type="button">Get Motivation</button>
        </Link>
      </div>
    </main>
  </div>
);

export default Home;
