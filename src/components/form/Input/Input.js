import React from 'react';
import { Box } from 'rebass';

const Input = props => <Box {...props} />;

Input.defaultProps = {
  type: 'text',
  as: 'input'
};

export default Input;
