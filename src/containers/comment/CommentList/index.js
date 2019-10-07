import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { LoadingContainer } from 'components/common';
import CommentActions, { CommentSelectors } from 'redux/CommentRedux';
import CommentItem from './CommentItem';

function CommentList({
  comments,
  post,
  space,
  commentsLoading,
  loadComments,
  ...rest
}) {
  const listRef = useRef(null);
  useEffect(() => {
    loadComments(space._id, post._id);
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments.length]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      overflowY="hidden"
      {...rest}
    >
      <LoadingContainer loading={commentsLoading}>
        <Flex
          flex={1}
          flexDirection="column-reverse"
          overflowY="auto"
          maxHeight="100%"
          px={20}
          py={[comments.length > 0 ? 10 : 0, 10]}
          ref={listRef}
        >
          {comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} pb={5} />
          ))}
        </Flex>
      </LoadingContainer>
    </Flex>
  );
}

CommentList.propTypes = {
  space: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  commentsLoading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired
};

const mapStatesToProps = state => ({
  comments: CommentSelectors.selectComments(state),
  commentsLoading: CommentSelectors.selectCommentsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  loadComments: (spaceId, postId) =>
    dispatch(CommentActions.loadComments(spaceId, postId))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(CommentList);
