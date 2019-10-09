import React, { useState } from 'react';
import { Box, Text } from 'rebass';
import ForgotPasswordForm from 'containers/auth/ForgotPasswordForm';
import { AuthLayout } from 'containers/layout';
import request from 'api/request';

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const handleForgot = async values => {
    const resp = await request('auth', 'requestResetPassword', [values.email]);

    if (!resp.ok) {
      throw new Error(resp.data.message);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box>
        <Text variant="h3" mb={20}>
          Reset link sent!
        </Text>
        <Text variant="body4">
          Now, please check your email for link to reset your password.
        </Text>
      </Box>
    );
  }

  return (
    <AuthLayout>
      <Text variant="pagetitle" mb={35}>
        Reset Password
      </Text>
      <ForgotPasswordForm onSubmit={handleForgot} />
      <Text textAlign="center" mt={20}>
        We’ll send you a link if we found your email address in our system.
      </Text>
    </AuthLayout>
  );
}

export default ForgotPassword;
