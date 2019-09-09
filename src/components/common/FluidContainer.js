import React from 'react';
import { Flex } from 'rebass';

const FluidContainer = props => {
  return <Flex flexDirection="column" maxWidth={1075} mx="auto" {...props} />;
};

export default FluidContainer;
