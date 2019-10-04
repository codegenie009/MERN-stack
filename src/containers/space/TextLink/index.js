import React from 'react';
import { Flex } from 'rebass';
import { Input, Select } from '@rebass/forms';
import { Button } from 'components/common';
import { FormGroup, Label } from 'components/form';
import COUNTRY_CODES from 'constants/country-code.json';

const COUNTRIES = COUNTRY_CODES.map(c => ({
  label: `${c.name} ${c.dial_code}`,
  value: `${c.code}#${c.dial_code}`
}));

function TextLink() {
  return (
    <FormGroup>
      <Label>Need this link on your phone? We’ll text it to you.</Label>
      <Flex alignItems="center">
        <Select mr={10} width={200} variant="input" defaultValue="US#+1">
          {COUNTRIES.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Input mr={10} width="initial" flex={1} placeholder="(201) 555-5555" />
        <Button
          width={160}
          px={15}
          icon="far fa-mobile"
          variant="secondarySquareSm"
        >
          Get Link
        </Button>
      </Flex>
    </FormGroup>
  );
}

export default TextLink;
