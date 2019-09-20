import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { Input } from '@rebass/forms';
import Clipboard from 'react-clipboard.js';
import { Button } from 'components/common';
import { FormGroup, Label, HelpText } from 'components/form';

function InvitationLink({ slug }) {
  const [copied, setCopied] = useState(false);
  const url = `${process.env.REACT_APP_URL}/invite/${slug}`;

  const handleSuccess = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <FormGroup>
      <Label>Share this invite link with family and friends.</Label>
      <Flex alignItems="center">
        <Input readOnly value={url} mr={10} width="initial" flex={1} />
        <Button
          as={Clipboard}
          data-clipboard-text={url}
          width={160}
          px={15}
          icon="far fa-link"
          variant="secondarySquareSm"
          onSuccess={handleSuccess}
        >
          {copied ? 'Link Copied!' : 'Copy Link'}
        </Button>
      </Flex>
      <HelpText>
        Anyone with this link can view and contribute to the memorial.
      </HelpText>
    </FormGroup>
  );
}

InvitationLink.propTypes = {
  slug: PropTypes.string
};

export default InvitationLink;
