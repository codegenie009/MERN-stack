import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';

const ModalHeader = ({ onClose, ...props }) => (
  <Box css={{ position: 'relative' }}>
    <Text variant="h3" {...props} />
    {onClose && (
      <Text
        as="i"
        className="far fa-times"
        color="gray"
        css={{
          cursor: 'pointer',
          position: 'absolute',
          right: 20,
          top: 20
        }}
        onClick={onClose}
      />
    )}
  </Box>
);

ModalHeader.propTypes = {
  onClose: PropTypes.func
};

export default ModalHeader;
