import React, { useState } from 'react';
import { Text, Box, Button } from 'rebass';
import { Link } from 'react-router-dom';
import withAuth from 'hocs/withAuth';
import { AuthLayout } from 'containers/layout';
import SpaceForm from 'containers/auth/SpaceForm';
import request, { refreshProfile } from 'api/request';
import InvitationLink from 'containers/space/InvitationLink';
import TextLink from 'containers/space/TextLink';

function SpaceCreate() {
  const [space, setSpace] = useState(null);
  const handleSubmit = async values => {
    const resp = await request('space', 'create', [
      {
        description: values.description,
        name: values.name
      }
    ]);

    if (resp.ok) {
      await refreshProfile();
      setSpace(resp.data);
    } else {
      throw new Error(resp.data.message);
    }
  };

  if (space) {
    return (
      <AuthLayout py={100}>
        <Text variant="pagetitle" mb={56}>
          Invite Members
        </Text>
        <InvitationLink slug={space.slug} />
        <TextLink />
        <Box mt={20}>
          <Button
            as={Link}
            to={`/spaces/${space.slug}`}
            variant="primarySquare"
          >
            Done
          </Button>
        </Box>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout py={100}>
      <Text variant="pagetitle" mb={56}>
        Create Memorial
      </Text>
      <SpaceForm onSubmit={handleSubmit} buttonText="Create" />
    </AuthLayout>
  );
}

export default withAuth(SpaceCreate, {
  redirect_uri: '/space-create'
});
