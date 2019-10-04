import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import { Modal, ModalHeader, FluidContainer, Button } from 'components/common';
import { SpaceSummaryCard } from 'components/space';
import Upload from 'containers/space/Upload';
import PostList from 'containers/space/PostList';
import PostViewModal from 'containers/space/PostViewModal';
import InvitationLink from 'containers/space/InvitationLink';
import TextLink from 'containers/space/TextLink';
import { SpaceSelectors } from 'redux/SpaceRedux';

function SpaceHome({ space }) {
  const [invite, setInvite] = useState(false);

  return (
    <Box>
      <Box bg="background2">
        <FluidContainer py={60}>
          <SpaceSummaryCard space={space} py={50}>
            <Upload spaceId={space._id} />
            <Button
              variant="secondary"
              icon="far fa-envelope"
              onClick={() => setInvite(true)}
            >
              Invite
            </Button>
          </SpaceSummaryCard>
        </FluidContainer>
      </Box>
      <FluidContainer py={60}>
        <PostList />
        <PostViewModal />
      </FluidContainer>
      <Modal isOpen={invite} onRequestClose={() => setInvite(false)}>
        <ModalHeader onClose={() => setInvite(false)} px={50} pt={40}>
          Invite Members
        </ModalHeader>
        <Box px={50} py={40}>
          <InvitationLink slug={space.slug} />
          <TextLink slug={space.slug} />
          <Button variant="primarySquare" onClick={() => setInvite(false)}>
            Done
          </Button>
        </Box>
      </Modal>
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
