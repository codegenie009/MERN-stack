import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Button } from 'rebass';
import { bps } from 'styles/breakpoints';

const headerButtonCss = p =>
  css`
    @media (max-width: ${bps.sm - 1}px) {
      padding: 0;
      border: none;
      box-shadow: none;
      color: ${p.theme.colors.text3};
      text-align: left;

      &:hover,
      &:focus {
        background: none;
        color: ${p.theme.colors.text};
      }
    }
  `;

const HeaderButtonContainer = styled(Button)`
  ${headerButtonCss}
`;

function HeaderButton({ ...rest }) {
  return <HeaderButtonContainer variant="secondary" {...rest} />;
}

export default HeaderButton;
