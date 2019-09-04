import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

function LoadingContainer({ children, loading, ...rest }) {
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: '200px',
    ...rest
  };

  if (loading) {
    return (
      <Box {...boxProps}>
        <i className="far fa-circle-notch fa-spin" />
      </Box>
    );
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
}

LoadingContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  loading: PropTypes.bool
};

export default LoadingContainer;
