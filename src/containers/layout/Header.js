import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FluidContainer } from 'components/common';
import { Box, Flex, Text, Button } from 'rebass';
import MainActions, { MainSelectors } from 'redux/MainRedux';

const Header = ({ isLoggedIn, user, setLogout, ...props }) => {
  return (
    <FluidContainer
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height={98}
      {...props}
    >
      <Box as={Link} to="/">
        <Box as="img" display="block" src="/logo-full.svg" alt="logo" />
      </Box>
      <Flex alignItems="center">
        <Text variant="headerlink" mr={33}>
          Premium
        </Text>
        <Text variant="headerlink" mr={33}>
          Help
        </Text>
        {!isLoggedIn && (
          <Text as={Link} to="/auth/login" variant="headerlink" mr={33}>
            Sign In
          </Text>
        )}
        {isLoggedIn && (
          <Text as={Link} to="/account/spaces" variant="headerlink" mr={33}>
            Account
          </Text>
        )}
        <Button as={Link} to="/space-create" variant="secondary">
          Create Memorial
        </Button>
        {isLoggedIn && <Button onClick={setLogout}>Logout</Button>}
      </Flex>
    </FluidContainer>
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
