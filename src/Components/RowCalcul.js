import PropTypes from 'prop-types';
import React from 'react';

class Row extends React.PureComponent {
  render() {
    const {
      first, second, third, fourth, updateDataObj,
    } = this.props;

    return (
      <div className="row">
        <button onClick={updateDataObj} type="button">{first}</button>
        <button onClick={updateDataObj} type="button">{second}</button>
        <button onClick={updateDataObj} type="button">{third}</button>
        { fourth ? <button onClick={updateDataObj} type="button">{fourth}</button> : null}
      </div>
    );
  }
}

Row.defaultProps = {
  fourth: '',
};

Row.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string,
  updateDataObj: PropTypes.func.isRequired,
};

export default Row;
