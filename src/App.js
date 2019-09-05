import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainActions, { MainSelectors } from 'redux/MainRedux';
import request from 'api/request';
import { MainLayout, Header } from 'containers/layout';
import { LoadingContainer } from 'components/common';

import Home from 'pages/home';
import SpaceCreate from 'pages/spaces/create';
import AuthRoutes from 'pages/auth';

// @TODO manage loading state of API with linear progress
class App extends Component {
  componentDidMount() {
    this.startup();
  }

  startup = async () => {
    const { setLoaded, setUser } = this.props;
    const token = Cookies.get('memorial-token');

    if (token) {
      const resp = await request('profile', 'get');
      if (resp.ok) {
        setUser(resp.data);
      }
    }
    setLoaded(true);
  };

  renderGuestRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/space-create" component={SpaceCreate} />
        <Route render={() => <Redirect to="/auth/login" />} />
      </Switch>
    );
  }

  renderUserRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/space-create" component={SpaceCreate} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }

  renderContent = () => {
    const { isLoggedin } = this.props;

    if (isLoggedin) {
      return this.renderUserRoutes();
    }

    return this.renderGuestRoutes();
  };

  render() {
    const { loaded } = this.props;

    return (
      <MainLayout>
        <Header />
        <LoadingContainer loading={!loaded}>
          {this.renderContent}
        </LoadingContainer>
      </MainLayout>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool,
  // loading: PropTypes.bool,
  isLoggedin: PropTypes.bool,
  setLoaded: PropTypes.func,
  setUser: PropTypes.func
};

const mapStatesToProps = state => ({
  loading: MainSelectors.selectLoading(state),
  loaded: MainSelectors.selectLoaded(state),
  isLoggedin: MainSelectors.selectLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  setUser: (token, user) => dispatch(MainActions.setUser(token, user)),
  setLoaded: loaded => dispatch(MainActions.setLoaded(loaded))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(App);
