import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import EmailForm from 'containers/auth/EmailForm';
import PasswordForm from 'containers/auth/PasswordForm';
import SignupForm from 'containers/auth/SignupForm';
import request from 'api/request';
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

  const handleSubmit = (token, user) => {
    setLogin(token, user);

    const redirectUri = getQueryParam('redirect_uri');
    history.push(redirectUri || '/account/spaces');
  };

  const handleLogin = async values => {
    const resp = await request('auth', 'login', [email, values.password]);

    if (!resp.ok) {
      throw new Error(resp.data);
    }

    handleSubmit(resp.data.token, resp.data.user);
  };

  const handleSignup = async values => {
    const resp = await request('auth', 'login', [email, values.password]);

    if (!resp.ok) {
      throw new Error(resp.data);
    }

    handleSubmit(resp.data.token, resp.data.user);
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
