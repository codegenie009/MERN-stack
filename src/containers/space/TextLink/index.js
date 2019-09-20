import React from 'react';
import { Flex } from 'rebass';
import { Input } from '@rebass/forms';
import { Button } from 'components/common';
import { FormGroup, Label } from 'components/form';

function TextLink() {
  return (
    <FormGroup>
      <Label>Need this link on your phone? We’ll text it to you.</Label>
      <Flex alignItems="center">
        <Input mr={10} width="initial" flex={1} />
        <Button
          width={160}
          px={15}
          icon="far fa-mobile"
          variant="secondarySquareSm"
        >
          Text Link
        </Button>
      </Flex>
    </FormGroup>
  );
}

export default TextLink;
