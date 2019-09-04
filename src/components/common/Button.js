import React from 'react';
import PropTypes from 'prop-types';
import { Button as RebassButton } from 'rebass';

function Button({ loading, disabled, children, ...rest }) {
  return (
    <RebassButton disabled={loading || disabled} {...rest}>
      {loading && <i className="far fa-circle-notch fa-spin" />}
      {children}
    </RebassButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
