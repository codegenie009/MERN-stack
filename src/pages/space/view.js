import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'rebass';
import get from 'lodash/get';
import { LoadingContainer, MobileHeader } from 'components/common';
import { SpaceSelectors } from 'redux/SpaceRedux';
import PostView from 'containers/space/PostView';
import request from 'api/request';

function SpacePostView({ space, match }) {
  const postId = get(match, 'params.postId', '');
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadPost(id) {
      setLoading(true);
      const resp = await request('post', 'get', [id], { spaceId: space._id });

      if (resp.ok) {
        setPost(resp.data);
      }

      // @TODO else redirect 404
      setLoading(false);
    }

    loadPost(postId);
  }, [postId, space._id]);

  return (
    <Box>
      <MobileHeader backLink={`/spaces/${space.slug}`}>Photo</MobileHeader>
      <LoadingContainer loading={loading}>
        {() => (
          <Box
            mx="auto"
            bg={['background', 'background2']}
            display="table"
            width={[1, 'initial']}
          >
            <PostView post={post} />
          </Box>
        )}
      </LoadingContainer>
    </Box>
  );
}

SpacePostView.propTypes = {
  space: PropTypes.object.isRequired,
  match: PropTypes.object
};

const mapStatesToProps = state => ({
  space: SpaceSelectors.selectCurrentSpace(state)
});

export default connect(mapStatesToProps)(SpacePostView);
