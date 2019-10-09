import React from 'react';
import { FluidContainer } from 'components/common';

const AuthLayout = ({ ...props }) => (
  <FluidContainer
    maxWidth={690}
    width={1}
    px={0}
    alignItems="stretch"
    {...props}
  />
);

export default AuthLayout;
