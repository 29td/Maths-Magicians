import React from 'react';
import Row from './RowCalcul';
import '../css/Calc.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <h1 className="heading">Calc( )</h1>
        <input type="number" className="result-screen" />
        <div className="buttons">
          <Row first="AC" second="+/-" third="%" fourth="/" />
          <Row first={7} second={8} third={9} fourth="*" />
          <Row first={4} second={5} third={6} fourth="-" />
          <Row first={1} second={2} third={3} fourth="+" />
          <Row first={0} second="." third="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
