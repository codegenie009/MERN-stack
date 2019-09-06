import React from 'react';
import withAuth from 'hocs/withAuth';
import SpaceForm from 'containers/auth/SpaceForm';
import request, { refreshProfile } from 'api/request';
import { goToPage } from 'utils/history';

function SpaceCreate() {
  const handleSubmit = async values => {
    const resp = await request('space', 'create', [
      {
        slug: values.slug,
        name: values.name
      }
    ]);

    if (resp.ok) {
      // @TODO go to space page
      await refreshProfile();
      goToPage('/account/spaces');
    } else {
      throw new Error(resp.data.message);
    }
  };

  return <SpaceForm onSubmit={handleSubmit} />;
}

export default withAuth(SpaceCreate, {
  redirect_uri: '/space-create',
  has_signup: true
});
