import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => {
  const {onHandleClick} = props;
  return (
    <button className="button" onClick={() => onHandleClick()}>Let me in</button>
  );
};

Button.propTypes = {
  onHandleClick: PropTypes.func.isRequired
};

export default Button;
