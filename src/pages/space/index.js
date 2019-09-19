import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LoadingContainer } from 'components/common';
import get from 'lodash/get';
import request from 'api/request';
import SpaceActions from 'redux/SpaceRedux';

import SpaceHome from './home';

function SpaceRoutes({ match, history, setSpace }) {
  const [loading, setLoading] = useState(true);
  const slug = get(match, 'params.slug', '');
  const { url: prefix } = match;

  useEffect(() => {
    async function loadSpace() {
      setLoading(true);
      const resp = await request('space', 'get', [slug]);

      if (resp.ok) {
        setSpace(resp.data);
      } else {
        // TODO handle error
        history.push('/account/spaces');
      }
      setLoading(false);
    }

    loadSpace();
  }, [slug]);

  return (
    <LoadingContainer loading={loading}>
      {() => (
        <Switch>
          <Route exact path={`${prefix}`} component={SpaceHome} />
          <Route render={() => <Redirect to="/account/spaces" />} />
        </Switch>
      )}
    </LoadingContainer>
  );
}

SpaceRoutes.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setSpace: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  setSpace: space => dispatch(SpaceActions.setSpace(space))
});

const enhance = compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhance(SpaceRoutes);
