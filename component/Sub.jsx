import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number.isRequired,
};

const defaultProps = {
  value: 0,
};

class Sub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        my name is gina
      </div>
    )
  }
}

Sub.propTypes = propTypes;
Sub.defaultProps = defaultProps;

export default Sub;