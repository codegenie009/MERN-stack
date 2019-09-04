import React, { useState } from 'react';
import EmailForm from 'containers/auth/EmailForm';
import PasswordForm from 'containers/auth/PasswordForm';
import request from 'api/request';

// @TODO create a step component
function Login() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = values => {
    setEmail(values.email);
    setStep(1);
  };

  const handleLogin = async values => {
    const resp = await request('auth', 'login', [email, values.password]);

    if (!resp.ok) {
      throw new Error(resp.data);
    }
  };

  if (step === 0) {
    return <EmailForm initialValues={{ email }} onSubmit={handleEmailSubmit} />;
  }

  return <PasswordForm onSubmit={handleLogin} />;
}

export default Login;
