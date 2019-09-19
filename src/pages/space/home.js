import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from 'rebass';
import { connect } from 'react-redux';
import { FluidContainer } from 'components/common';
import { SpaceSummaryCard } from 'components/space';
import { SpaceSelectors } from 'redux/SpaceRedux';

function SpaceHome({ space }) {
  return (
    <Box>
      <Box bg="background2">
        <FluidContainer py={60}>
          <SpaceSummaryCard space={space} py={50}>
            <Button variant="primary">+ Add Photo or Video</Button>
          </SpaceSummaryCard>
        </FluidContainer>
      </Box>
      <FluidContainer py={60}>Content goes here</FluidContainer>
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
