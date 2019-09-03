import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainActions, { MainSelectors } from './redux/MainRedux';
import request from './api/request';

// @TODO routing, guest/user/admin routes
// @TODO manage loading state of the app
// @TODO manage loading state of API with linear progress
// @TODO layouting with header and body
class App extends Component {
  componentDidMount() {
    this.startup();
  }

  startup = async () => {
    const { setLoaded, setUser } = this.props;
    const token = Cookies.get('token');

    if (token) {
      const resp = await request('profile', 'get');
      if (resp.ok) {
        setUser(resp.data);
      }
    }
    setLoaded(true);
  };

  render() {
    return <h1>Hello rembrance!</h1>;
  }
}

App.propTypes = {
  // loaded: PropTypes.bool,
  // loading: PropTypes.bool,
  // isLoggedin: PropTypes.bool,
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
