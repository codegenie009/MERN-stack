import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Widget } from '@uploadcare/react-widget/en';
import request from 'api/request';
import { Button } from 'components/common';
import SpaceActions from 'redux/SpaceRedux';

function Upload({ spaceId, addPosts }) {
  const widgetApi = useRef();
  const [value, setValue] = useState(null);

  const handleUpload = async fileInfo => {
    // file info is FileGroupInfo here
    setValue(fileInfo);
    const resp = await request(
      'post',
      'batchCreate',
      [
        {
          group_id: fileInfo.uuid
        }
      ],
      { spaceId }
    );

    // reset upload modal
    if (resp.ok) {
      addPosts(resp.data);
      setValue(null);
    } else {
      // @TODO handle feedback
      widgetApi.current.openDialog();
    }
  };

  return (
    <>
      <Button
        variant="primary"
        icon="fas fa-camera"
        mr={10}
        loading={!!value}
        onClick={() => widgetApi.current.openDialog()}
      >
        Upload
      </Button>
      <Widget
        id="file"
        ref={widgetApi}
        publicKey={process.env.REACT_APP_UPLOADCARE_PUBLIC_KEY}
        value={value}
        previewStep
        clearable
        crop="free, 16:9, 4:3, 5:4, 1:1"
        multiple
        imagesOnly
        inputAcceptTypes="image/*"
        preferredTypes="image/*"
        onChange={handleUpload}
      />
    </>
  );
}

Upload.propTypes = {
  spaceId: PropTypes.string.isRequired,
  addPosts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addPosts: posts => dispatch(SpaceActions.addPosts(posts))
});

export default connect(
  null,
  mapDispatchToProps
)(Upload);
