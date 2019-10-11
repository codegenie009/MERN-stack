import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Text, Button } from 'rebass';
import { FluidContainer } from 'components/common';
import { Content } from 'containers/layout';

function Home() {
  return (
    <Content py={0} maxWidth="100%" px={0}>
      <FluidContainer alignItems="center" display="flex" py={[56, 112]}>
        <Text as="h1" variant="h1" mb={40}>
          The hub for family memories.
        </Text>
        <Text
          maxWidth={900}
          variant="body3"
          color="text3"
          mb={40}
          textAlign="center"
        >
          Keep family photos and videos in a private, central space — for free.
          Bring everyone together to view, share, and comment on beautiful
          memories.
        </Text>
        <Button
          as={Link}
          to="/space-create"
          variant="home"
          width={[1, 400]}
          mb={60}
        >
          Create Memorial
        </Button>
        <Image variant="imagecard" width={1} src="/Rembrance.png" />
      </FluidContainer>
    </Content>
  );
}

export default Home;
