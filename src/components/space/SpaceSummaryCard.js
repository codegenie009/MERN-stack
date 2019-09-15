import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Text, Box, Image } from 'rebass';

const IMAGE = 'https://source.unsplash.com/random/196x196?people';

function SpaceSummaryCard({ space, children, ...rest }) {
  return (
    <Flex variant="hasDivider" {...rest}>
      <Image src={IMAGE} variant="spacethumb" mr={45} />
      <Box flex={1}>
        <Text variant="h3" mb={15}>
          {space.name}
        </Text>
        <Text variant="body4" mb={18}>
          Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an
          American singer, songwriter, and dancer. Dubbed the "King of Pop", he
          is regarded as one of the most significant cultural figures of the
          20th century and one of the greatest entertainers.
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
