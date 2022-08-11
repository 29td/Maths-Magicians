import React, { useEffect, useState } from 'react';
import calculate from './logic/calculator';
import Row from './RowCalcul';
import '../css/Calc.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateDataObj = this.updateDataObj.bind(this);
  }

  componentDidUpdate() {
    this.updateScreen();
  }

  updateDataObj(event) {
    const val = event.target.textContent;
    this.setState((prevState) => ({
      dataObj: { ...calculate(prevState.dataObj, val) },
    }));
  }

  updateScreen() {
    const screen = document.querySelector('.result-screen');
    const { dataObj } = this.state;
    if (dataObj.next && !dataObj.total) {
      screen.value = dataObj.next;
    } else if (!dataObj.next && dataObj.total) {
      screen.value = dataObj.operation
        ? `${dataObj.total}  ${dataObj.operation}`
        : dataObj.total;
    } else if (!dataObj.total && !dataObj.next) {
      screen.value = '';
    } else {
      screen.value = `
        ${dataObj.total} ${
  dataObj.operation
    ? `${dataObj.operation} ${dataObj.next}`
    : dataObj.next
}`;
    }
  }

  render() {
    return (
      <div className="calculator">
        <h1 className="heading">Calculator( )</h1>by Nonhlanhla Mndebele
        <input type="text" className="result-screen" value={0} readOnly />
        <div className="buttons">
          <Row
            updateDataObj={this.updateDataObj}
            first="AC"
            second="+/-"
            third="%"
            fourth="/"
          />
          <Row
            updateDataObj={this.updateDataObj}
            first="7"
            second="8"
            third="9"
            fourth="*"
          />
          <Row
            updateDataObj={this.updateDataObj}
            first="4"
            second="5"
            third="6"
            fourth="-"
          />
          <Row
            updateDataObj={this.updateDataObj}
            first="1"
            second="2"
            third="3"
            fourth="+"
          />
          <Row
            updateDataObj={this.updateDataObj}
            first="0"
            second="."
            third="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
