import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CalculatorContainer from './pages/Container';
import Quote from './pages/quotes';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<CalculatorContainer />} />
            <Route path="/pages/quotes" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
