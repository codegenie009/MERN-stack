import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Text, Box, Image } from 'rebass';
import uc from 'utils/uploadcare';

const IMAGE = 'https://source.unsplash.com/random/196x196?people';

function SpaceSummaryCard({ space, children, ...rest }) {
  return (
    <Flex variant="hasDivider" {...rest}>
      <Image
        src={space.image ? uc.thumb(space.image) : IMAGE}
        variant="spacethumb"
        mr={45}
      />
      <Box flex={1}>
        <Text variant="h3" mb={15}>
          {space.name}
        </Text>
        <Text variant="body4" mb={18}>
          {space.description}
        </Text>
        {children}
        {space.role === 'OWNER' && (
          <Button variant="secondary" ml={10}>
            Edit Memorial
          </Button>
        )}
      </Box>
    </Flex>
  );
}

SpaceSummaryCard.propTypes = {
  space: PropTypes.object,
  children: PropTypes.node
};

export default SpaceSummaryCard;
