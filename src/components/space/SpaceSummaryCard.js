import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Box, Image } from 'rebass';
import uc from 'utils/uploadcare';

const IMAGE = 'https://source.unsplash.com/random/196x196?people';

function SpaceSummaryCard({ space, children, ...rest }) {
  return (
    <Flex
      variant="hasDivider"
      flexDirection={['column', 'row']}
      alignItems={['center', 'flex-start']}
      px={[28, 0]}
      mx={[-28, 0]}
      {...rest}
    >
      <Image
        src={space.image ? uc.thumb(space.image) : IMAGE}
        variant="spacethumb"
        mr={[0, 45]}
        mb={[20, 0]}
      />
      <Box flex={1} width={1}>
        <Text variant="h3" mb={[20, 15]} textAlign={['center', 'left']}>
          {space.name}
        </Text>
        <Text variant="body4" mb={18}>
          {space.description}
        </Text>
        {children}
        {/* {space.role === 'OWNER' && (
          <Button variant="secondary" ml={[0, 10]} mt={[10, 0]}>
            Settings
          </Button>
        )} */}
      </Box>
    </Flex>
  );
}

SpaceSummaryCard.propTypes = {
  space: PropTypes.object,
  children: PropTypes.node
};

export default SpaceSummaryCard;
