import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'redux';
import { Text } from 'rebass';
import LoginForm from 'containers/auth/LoginForm';
import { AuthLayout } from 'containers/layout';
import request from 'api/request';
import { getQueryParam } from 'utils/history';
import MainActions from 'redux/MainRedux';

function Login({ history, refreshProfile, setLogin }) {
  const redirectUri = getQueryParam('redirect_uri') || '';
  const handleSubmit = async (token, user) => {
    setLogin(token, user);
    await refreshProfile();

    history.push(redirectUri || '/account/spaces');
  };

  const handleLogin = async values => {
    const resp = await request('auth', 'login', [
      values.email,
      values.password
    ]);

    if (!resp.ok) {
      throw new Error(resp.data.message);
    }

    await handleSubmit(resp.data.token);
  };

  return (
    <AuthLayout>
      <Text variant="pagetitle" mb={35}>
        Log In
      </Text>
      <LoginForm onSubmit={handleLogin} />
      <Text textAlign="center" mt={20}>
        Can't sign in?&nbsp;
        <Text as={Link} variant="boldlink" to="/auth/request-reset-password">
          Reset Password
        </Text>
        .
      </Text>
      <Text textAlign="center">
        Don't have an account?&nbsp;
        <Text
          as={Link}
          variant="boldlink"
          to={`/auth/signup?redirect_uri=${redirectUri}`}
        >
          Sign Up
        </Text>
        .
      </Text>
    </AuthLayout>
  );
}

Login.propTypes = {
  history: PropTypes.object,
  setLogin: PropTypes.func,
  refreshProfile: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  setLogin: (token, user) => dispatch(MainActions.setLogin(token, user)),
  refreshProfile: () => dispatch(MainActions.refreshProfile())
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(Login);
