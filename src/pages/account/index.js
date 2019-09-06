import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Content } from 'containers/layout';

import Spaces from './spaces';

function AccountRoutes({ match }) {
  const { url: prefix } = match;

  return (
    <Content>
      <Switch>
        <Route exact path={`${prefix}/spaces`} component={Spaces} />
        <Route render={() => <Redirect to="/account/spaces" />} />
      </Switch>
    </Content>
  );
}

AccountRoutes.propTypes = {
  match: PropTypes.object
};

export default withRouter(AccountRoutes);
