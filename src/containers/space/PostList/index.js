import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { LoadingContainer } from 'components/common';
import SpaceActions, { SpaceSelectors } from 'redux/SpaceRedux';
import PostItem from './PostItem';

function PostList({ space, loadPosts, posts, postsLoading, setCurrentPost }) {
  useEffect(() => {
    loadPosts(space._id);
  }, []);

  return (
    <LoadingContainer loading={postsLoading}>
      <Flex flexWrap="wrap" alignItems="center" mx={-20}>
        {posts.map(post => (
          <PostItem
            key={post._id}
            post={post}
            mx={20}
            my={20}
            onClick={() => setCurrentPost(post)}
          />
        ))}
      </Flex>
    </LoadingContainer>
  );
}

PostList.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  setCurrentPost: PropTypes.func.isRequired,
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
  loadPosts: spaceId => dispatch(SpaceActions.loadPosts(spaceId)),
  setCurrentPost: post => dispatch(SpaceActions.setCurrentPost(post))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(PostList);
