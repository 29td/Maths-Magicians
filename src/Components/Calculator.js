import React, { useEffect, useState } from 'react';
import Row from './RowCalcul';
import calculate from './logic/calculator';
import '../css/Calc.css';

const Calculator = () => {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function updateDataObj(event) {
    const value = event.target.textContent;
    setDataObj((prevDataObj) => calculate(prevDataObj, value));
  }

  let screen = '0';

  function updateScreen() {
    if (dataObj.next && !dataObj.total) {
      screen = dataObj.next;
    } else if (!dataObj.next && dataObj.total) {
      screen = dataObj.operation
        ? `${dataObj.total}  ${dataObj.operation}`
        : dataObj.total;
    } else if (!dataObj.total && !dataObj.next) {
      screen = '0';
    } else {
      screen = `
        ${dataObj.total} ${
  dataObj.operation
    ? `${dataObj.operation} ${dataObj.next}`
    : dataObj.next
}`;
    }
  }

  updateScreen();

  return (
    <div className="calculator">
      <h1 className="heading">Calculator( )</h1>
      by Nonhlanhla Mndebele
      <input type="text" className="result-screen" value={screen} readOnly />
      <div className="buttons">
        <Row
          updateDataObj={updateDataObj}
          first="AC"
          second="+/-"
          third="%"
          fourth="/"
        />
        <Row
          updateDataObj={updateDataObj}
          first="7"
          second="8"
          third="9"
          fourth="*"
        />
        <Row
          updateDataObj={updateDataObj}
          first="4"
          second="5"
          third="6"
          fourth="-"
        />
        <Row
          updateDataObj={updateDataObj}
          first="1"
          second="2"
          third="3"
          fourth="+"
        />
        <Row
          updateDataObj={updateDataObj}
          first="0"
          second="."
          third="="
        />
      </div>
    </div>
  );
};

export default Calculator;
