import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button } from 'rebass';
import MainActions, { MainSelectors } from 'redux/MainRedux';

const Header = ({ isLoggedIn, user, setLogout, ...props }) => {
  return (
    <Box {...props}>
      Rembrance Logo
      {isLoggedIn && <Button onClick={setLogout}>Logout</Button>}
      {isLoggedIn ? (
        `Hello, ${user.firstName}`
      ) : (
        <Link to="/auth/login">Login</Link>
      )}
    </Box>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  setLogout: PropTypes.func
};

const mapStatesToProps = state => ({
  isLoggedIn: MainSelectors.selectLoggedIn(state),
  user: MainSelectors.selectUser(state)
});

const mapDispatchToProps = dispatch => ({
  setLogout: () => dispatch(MainActions.setLogout())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Header);
