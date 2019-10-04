import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Flex, Text, Image } from 'rebass';
import SpaceActions, { SpaceSelectors } from 'redux/SpaceRedux';
import { Modal, UserMention, Divider } from 'components/common';
import CommentList from 'containers/comment/CommentList';
import CommentForm from 'containers/comment/CommentForm';
import { getHumanizedDate } from 'helpers/datetime';

function PostViewModal({ space, post, onClose }) {
  if (!post) {
    return null;
  }

  return (
    <Modal isOpen onRequestClose={onClose}>
      <Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          height="70vh"
          minWidth="30vw"
          bg="background2"
        >
          <Image src={post.fileUrl} maxHeight="100%" />
        </Flex>
        <Flex
          width={300}
          height="70vh"
          flexDirection="column"
          sx={{
            borderLeftColor: 'divider',
            borderLeftStyle: 'solid',
            borderLeftWidth: 2
          }}
        >
          <Box px={20} py={10}>
            <Text variant="caption">
              Shared by <UserMention variant="caption" user={post.user} />
            </Text>
            <Text variant="subtitle" color="text3">
              {getHumanizedDate(post.createdAt)}
            </Text>
          </Box>
          <Divider />
          <CommentList space={space} post={post} flex={1} />
          <Divider />
          <CommentForm space={space} post={post} />
        </Flex>
      </Flex>
    </Modal>
  );
}

PostViewModal.propTypes = {
  space: PropTypes.object,
  post: PropTypes.object,
  onClose: PropTypes.func
};

const mapStatesToProps = state => ({
  space: SpaceSelectors.selectCurrentSpace(state),
  post: SpaceSelectors.selectCurrentPost(state)
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(SpaceActions.setCurrentPost(null))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(PostViewModal);
