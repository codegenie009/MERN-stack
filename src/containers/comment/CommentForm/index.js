import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'rebass';
import { Input } from '@rebass/forms';
import CommentActions, { CommentSelectors } from 'redux/CommentRedux';
import { MainSelectors } from 'redux/MainRedux';
import request from 'api/request';

function CommentForm({
  addComment,
  currentComment,
  changeComment,
  setCurrentComment,
  space,
  post,
  user,
  ...props
}) {
  const inputRef = useRef(null);
  const [saving, setSaving] = useState(false);

  const handleChange = evt => {
    changeComment(evt.target.value);
  };

  const submitComment = async () => {
    // @TODO edit comment
    // @TODO handle error
    setSaving(true);
    const resp = await request(
      'comment',
      'create',
      [
        {
          ...currentComment,
          post: post._id
        }
      ],
      { spaceId: space._id }
    );

    if (resp.ok) {
      addComment({
        ...resp.data,
        user
      });
      setCurrentComment({});
    }

    setSaving(false);
    inputRef.current.focus();
  };

  const handleKeyDown = evt => {
    if (evt.keyCode === 13) {
      submitComment();
    }
  };

  return (
    <Box {...props}>
      <Input
        ref={inputRef}
        disabled={saving}
        value={currentComment.content || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder=" Enter to submit comment"
        variant="naked"
        autoFocus
      />
    </Box>
  );
}

CommentForm.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  space: PropTypes.object.isRequired,
  changeComment: PropTypes.func.isRequired,
  setCurrentComment: PropTypes.func.isRequired,
  currentComment: PropTypes.object,
  addComment: PropTypes.func
};

const mapStatesToProps = state => ({
  user: MainSelectors.selectUser(state),
  currentComment: CommentSelectors.selectCurrentComment(state)
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(CommentActions.addComment(comment)),
  changeComment: content => dispatch(CommentActions.changeComment(content)),
  setCurrentComment: comment =>
    dispatch(CommentActions.setCurrentComment(comment))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(CommentForm);
