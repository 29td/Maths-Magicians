import PropTypes from 'prop-types';
import React from 'react';

class Row extends React.Component {
  render() {
    const {
      first, second, third, fourth,
    } = this.props;

    return (
      <div className="row">
        <button type="button">{first}</button>
        <button type="button">{second}</button>
        <button type="button">{third}</button>
        { fourth ? <button type="button">{fourth}</button> : null}
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
};

export default Row;
