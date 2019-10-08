import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  MobileHeader,
  FluidContainer,
  Button
} from 'components/common';
import { SpaceSummaryCard } from 'components/space';
import Upload from 'containers/space/Upload';
import PostList from 'containers/space/PostList';
import PostViewModal from 'containers/space/PostViewModal';
import InvitationLink from 'containers/space/InvitationLink';
import TextLink from 'containers/space/TextLink';
import { SpaceSelectors } from 'redux/SpaceRedux';
import history from 'utils/history';
import isMobile from 'utils/mobile';

function SpaceHome({ space }) {
  const [invite, setInvite] = useState(false);
  const handleInvite = () => {
    if (isMobile()) {
      history.push(`/spaces/${space.slug}/invite`);
    } else {
      setInvite(true);
    }
  };

  return (
    <Box>
      <MobileHeader backLink="/">{space.name}</MobileHeader>
      <Box bg="background2">
        <FluidContainer py={[0, 60]}>
          <SpaceSummaryCard space={space} py={50}>
            <Upload spaceId={space._id} />
            <Button
              variant="secondary"
              icon="far fa-envelope"
              onClick={handleInvite}
              mt={[10, 0]}
              ml={[0, 10]}
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
        <ModalHeader onClose={() => setInvite(false)}>
          Invite Members
        </ModalHeader>
        <Box px={50} py={40}>
          <InvitationLink slug={space.slug} />
          <TextLink space={space} />
          <Button
            variant="primarySquare"
            onClick={() => setInvite(false)}
            mt={15}
          >
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
