import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpaceActions, { SpaceSelectors } from 'redux/SpaceRedux';
import { Modal, ModalHeader } from 'components/common';
import PostView from 'containers/space/PostView';

function PostViewModal({ post, onClose }) {
  if (!post) {
    return null;
  }

  return (
    <Modal isOpen onRequestClose={onClose}>
      <ModalHeader onClose={onClose} display={['block', 'none']}>
        Photo
      </ModalHeader>
      <PostView post={post} />
    </Modal>
  );
}

PostViewModal.propTypes = {
  post: PropTypes.object,
  onClose: PropTypes.func
};

const mapStatesToProps = state => ({
  post: SpaceSelectors.selectCurrentPost(state)
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(SpaceActions.setCurrentPost(null))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(PostViewModal);
