import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Content } from 'containers/layout';

import Login from './login';

function AuthRoutes({ match }) {
  const { url: prefix } = match;

  return (
    <Content>
      <Switch>
        <Route exact path={`${prefix}/login`} component={Login} />
        <Route render={() => <Redirect to="/auth/login" />} />
      </Switch>
    </Content>
  );
}

AuthRoutes.propTypes = {
  match: PropTypes.object
};

export default withRouter(AuthRoutes);
