import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { LoadingContainer } from 'components/common';
import SpaceActions, { SpaceSelectors } from 'redux/SpaceRedux';
import PostItem from './PostItem';

function PostList({ space, loadPosts, posts, postsLoading }) {
  useEffect(() => {
    loadPosts(space._id);
  }, []);

  return (
    <LoadingContainer loading={postsLoading}>
      <Flex flexWrap="wrap" alignItems="center" mx={-20}>
        {posts.map(post => (
          <PostItem key={post._id} post={post} mx={20} my={20} />
        ))}
      </Flex>
    </LoadingContainer>
  );
}

PostList.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  space: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  postsLoading: PropTypes.bool.isRequired
};

const mapStatesToProps = state => ({
  space: SpaceSelectors.selectCurrentSpace(state),
  posts: SpaceSelectors.selectPosts(state),
  postsLoading: SpaceSelectors.selectPostsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  loadPosts: spaceId => dispatch(SpaceActions.loadPosts(spaceId))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(PostList);
