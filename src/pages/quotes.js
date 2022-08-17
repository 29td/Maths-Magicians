import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../css/quotes.css';

const Quote = () => {
  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await fetch('https://random-math-quote-api.herokuapp.com/');
      const json = await data.json();
      document.querySelector('.quote').innerHTML = `
        &quot;${json.quote}&quot;
        <br>
        <cite class='author'>-${json.author}</cite>
      `;
    };

    fetchQuotes();
  });

  return (
    <div>
      <Navbar />
      <blockquote className="quote-container">
        <p className="quote" />
      </blockquote>
    </div>
  );
};

export default Quote;
