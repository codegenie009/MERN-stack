import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainActions, { MainSelectors } from 'redux/MainRedux';
import { refreshProfile } from 'api/request';
import { MainLayout, Footer, Header } from 'containers/layout';
import { LoadingContainer } from 'components/common';

import Home from 'pages/home';
import SpaceCreate from 'pages/home/space-create';
import AuthRoutes from 'pages/auth';
import AccountRoutes from 'pages/account';

// @TODO manage loading state of API with linear progress
class App extends Component {
  componentDidMount() {
    this.startup();
  }

  startup = async () => {
    const { setLoaded } = this.props;
    const token = Cookies.get('memorial-token');

    if (token) {
      await refreshProfile();
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
        <Route path="/account" component={AccountRoutes} />
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
        <Footer />
      </MainLayout>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool,
  // loading: PropTypes.bool,
  isLoggedin: PropTypes.bool,
  setLoaded: PropTypes.func
};

const mapStatesToProps = state => ({
  loading: MainSelectors.selectLoading(state),
  loaded: MainSelectors.selectLoaded(state),
  isLoggedin: MainSelectors.selectLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  setLoaded: loaded => dispatch(MainActions.setLoaded(loaded))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(App);
