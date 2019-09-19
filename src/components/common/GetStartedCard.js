import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from 'rebass';

function GetStartedCard({ title, icon, children }) {
  return (
    <Flex
      variant="card"
      width={[1, 'calc(25% - 30px)']}
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      pt={50}
      px={20}
      pb={[50, 0]}
      my={[20, 0]}
      height={['initial', 300]}
    >
      <Text as="i" fontSize={40} className={`far fa-${icon}`} mb={25} />
      <Text variant="h4" mb={15}>
        {title}
      </Text>
      <Text variant="body3" color="text3">
        {children}
      </Text>
    </Flex>
  );
}

GetStartedCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string
};

export default GetStartedCard;
