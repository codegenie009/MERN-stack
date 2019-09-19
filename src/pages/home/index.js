import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Button } from 'rebass';
import { FluidContainer, GetStartedCard, HomeRow } from 'components/common';
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

const HOME_ROWS = [
  {
    title: 'Beautiful, online memorials',
    description:
      'Celebrate a life with friends and family through a private, online memorial — for free.',
    src: '/Hero-compressed.jpg',
    titleVariant: 'h1',
    children: (
      <Button
        as={Link}
        to="/space-create"
        variant="home"
        width={[1, 'initial']}
        mb={[56, 0]}
      >
        Create Memorial
      </Button>
    )
  },
  {
    title: 'Share a private memorial with friends and family',
    description:
      'Create a private memorial space and easily invite friends and family to view and contribute.',
    src: '/Image-1-compressed.jpg'
  },
  {
    title: ' Capture memories with photos and videos',
    description:
      'Easily add photos and videos to bring memories to life. Create a central location everyone can access.',
    src: '/Image-2-compressed.jpg'
  },
  {
    title: 'Add comments to commemorate together',
    description:
      'Post tributes, anecdotes, memories and more. Comment replies help keep everything organized.',
    src: '/Image-3-compressed.jpg'
  },
  {
    title: 'Help everyone stay connected',
    description:
      'Enable notifications for new images, videos and comments to keep everyone connected.',
    src: '/Image-4-compressed.jpg'
  }
];

function Home() {
  return (
    <Content py={0} maxWidth="100%" px={0}>
      {HOME_ROWS.map((row, index) => (
        <HomeRow key={`home_${index}`} reversed={Boolean(index % 2)} {...row} />
      ))}
      <Flex
        py={[56, 112]}
        alignItems="center"
        flexDirection="column"
        css={{ position: 'relative' }}
      >
        <Box
          height="1px"
          width={[0, 1]}
          bg="border2"
          css={{ position: 'absolute', top: '50%', zIndex: -1 }}
        />
        <Text variant="h3" mb={[56, 85]}>
          Get started for free
        </Text>
        <FluidContainer
          alignItems="center"
          justifyContent="space-between"
          flexDirection={['column', 'row']}
          mb={[56, 85]}
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
        <FluidContainer>
          <Button
            as={Link}
            to="/space-create"
            variant="home"
            width={[1, 'initial']}
          >
            Create Memorial
          </Button>
        </FluidContainer>
      </Flex>
    </Content>
  );
}

export default Home;
