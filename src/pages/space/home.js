import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import { FluidContainer, Button } from 'components/common';
import { SpaceSummaryCard } from 'components/space';
import Upload from 'containers/space/Upload';
import PostList from 'containers/space/PostList';
import { SpaceSelectors } from 'redux/SpaceRedux';

function SpaceHome({ space }) {
  return (
    <Box>
      <Box bg="background2">
        <FluidContainer py={60}>
          <SpaceSummaryCard space={space} py={50}>
            <Upload spaceId={space._id} />
            <Button variant="secondary" icon="far fa-envelope">
              Invite
            </Button>
          </SpaceSummaryCard>
        </FluidContainer>
      </Box>
      <FluidContainer py={60}>
        <PostList />
      </FluidContainer>
    </Box>
  );
}

SpaceHome.propTypes = {
  space: PropTypes.object.isRequired
};

const mapStatesToProps = state => ({
  space: SpaceSelectors.selectCurrentSpace(state)
});

export default connect(mapStatesToProps)(SpaceHome);
