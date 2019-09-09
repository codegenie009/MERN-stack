import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Button } from 'rebass';
import { FluidContainer, GetStartedCard } from 'components/common';
import { Content } from 'containers/layout';

const GET_STARTED_CARDS = [
  {
    title: 'Create your account',
    description: 'Remembrance is free to use. You can add unlimited memorials.',
    icon: 'books'
  },
  {
    title: 'Add a memorial',
    description:
      'Get started with just a name. Add as much detail as you like.',
    icon: 'books'
  },
  {
    title: 'Invite members',
    description: 'Easily invite friends and family to access the memorial.',
    icon: 'books'
  },
  {
    title: 'Celebrate a life',
    description: 'Members can add photos, videos, posts and comments.',
    icon: 'books'
  }
];

const HomeRow = props => (
  <FluidContainer
    pt={112}
    pb={112}
    flexDirection="row"
    sx={{
      borderBottomColor: 'border3',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid'
    }}
    alignItems="center"
    {...props}
  />
);

function Home() {
  return (
    <Content py={0} maxWidth="100%">
      <HomeRow>
        <Box flex={1}>
          <Text as="h1" variant="h1" mb={38}>
            Beautiful, online memorials
          </Text>
          <Text color="text3" mb={47}>
            Celebrate a life with friends and family through a private, online
            memorial — for free.
          </Text>
          <Button as={Link} to="/space-create" variant="primary">
            Create Memorial
          </Button>
        </Box>
        <Box variant="imagecard" width={495} height={440} ml={140} />
      </HomeRow>
      <HomeRow>
        <Box variant="imagecard" width={495} height={440} mr={140} />
        <Box flex={1}>
          <Text variant="h3" mb={20}>
            Share a private memorial with friends and family
          </Text>
          <Text color="text3">
            Create a private memorial space and easily invite friends and family
            to view and contribute.
          </Text>
        </Box>
      </HomeRow>
      <HomeRow>
        <Box flex={1}>
          <Text variant="h3" mb={20}>
            Capture memories with photos and videos
          </Text>
          <Text color="text3">
            Easily add photos and videos to bring memories to life. Create a
            central location everyone can access.
          </Text>
        </Box>
        <Box variant="imagecard" width={495} height={440} ml={140} />
      </HomeRow>
      <HomeRow>
        <Box variant="imagecard" width={495} height={440} mr={140} />
        <Box flex={1}>
          <Text variant="h3" mb={20}>
            Add comments to commemorate together
          </Text>
          <Text color="text3">
            Post tributes, anecdotes, memories and more. Comment replies help
            keep everything organized.
          </Text>
        </Box>
      </HomeRow>
      <HomeRow>
        <Box flex={1}>
          <Text variant="h3" mb={20}>
            Help everyone stay connected
          </Text>
          <Text color="text3">
            Enable notifications for new images, videos and comments to keep
            everyone connected.
          </Text>
        </Box>
        <Box variant="imagecard" width={495} height={440} ml={140} />
      </HomeRow>
      <Flex
        py={112}
        alignItems="center"
        flexDirection="column"
        css={{ position: 'relative' }}
      >
        <Box
          height="1px"
          width={1}
          bg="border2"
          css={{ position: 'absolute', top: '50%', zIndex: -1 }}
        />
        <Text variant="h3" mb={85}>
          Get started for free
        </Text>
        <FluidContainer
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          mb={85}
        >
          {GET_STARTED_CARDS.map(c => (
            <GetStartedCard
              key={c.title}
              title={c.title}
              children={c.description}
              icon={c.icon}
            />
          ))}
        </FluidContainer>
        <Button as={Link} to="/space-create" variant="primary">
          Create Memorial
        </Button>
      </Flex>
    </Content>
  );
}

export default Home;
