import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import EmailForm from 'containers/auth/EmailForm';
import PasswordForm from 'containers/auth/PasswordForm';
import SignupForm from 'containers/auth/SignupForm';
import request, { refreshProfile } from 'api/request';
import { getQueryParam } from 'utils/history';
import MainActions from 'redux/MainRedux';

// @TODO create a step component
function Login({ history, setLogin }) {
  const [step, setStep] = useState(0);
  const [exist, setExist] = useState(false);
  const [email, setEmail] = useState('');
  const hasSignup = getQueryParam('has_signup');

  const handleEmailSubmit = (values, hasUser) => {
    setEmail(values.email);
    setExist(hasUser);
    setStep(1);
  };

  const handleSubmit = async (token, user) => {
    setLogin(token, user);
    await refreshProfile();

    const redirectUri = getQueryParam('redirect_uri');
    history.push(redirectUri || '/account/spaces');
  };

  const handleLogin = async values => {
    const resp = await request('auth', 'login', [email, values.password]);

    if (!resp.ok) {
      throw new Error(resp.data);
    }

    await handleSubmit(resp.data.token);
  };

  const handleSignup = async values => {
    const resp = await request('auth', 'login', [email, values.password]);

    if (!resp.ok) {
      throw new Error(resp.data);
    }

    await handleSubmit(resp.data.token);
  };

  if (step === 0) {
    return (
      <EmailForm
        initialValues={{ email }}
        onSubmit={handleEmailSubmit}
        ignoreUserCheck={!!hasSignup}
      />
    );
  }

  if (exist) {
    return <PasswordForm onSubmit={handleLogin} />;
  }

  return <SignupForm onSubmit={handleSignup} />;
}

Login.propTypes = {
  history: PropTypes.object,
  setLogin: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  setLogin: (token, user) => dispatch(MainActions.setLogin(token, user))
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(Login);
