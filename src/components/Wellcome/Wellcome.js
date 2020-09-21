import React from 'react';
import PropTypes from 'prop-types';

import './wellcome.css';

const Wellcome = ({ src }) => {
  return (
    <img src={src} alt="Wellcome User" className="wellcome"/>
  );
}

Wellcome.propTypes = {
  src: PropTypes.string.isRequired,
}


export default Wellcome;