import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass';
import MainActions, { MainSelectors } from 'redux/MainRedux';
import {
  FluidContainer,
  DropdownItem,
  DropdownButton
} from 'components/common';
import HeaderNav from './HeaderNav';
import HeaderNavItem from './HeaderNavItem';
import HeaderButton from './HeaderButton';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      nav: false
    };
  }

  renderAccountMenu() {
    const { setLogout } = this.props;
    return (
      <DropdownButton
        variant="headerlink"
        mr={33}
        label="Account"
        closeOnInsideClick
      >
        <DropdownItem as={Link} to="/account/spaces">
          My Memorials
        </DropdownItem>
        <DropdownItem onClick={setLogout}>Log Out</DropdownItem>
      </DropdownButton>
    );
  }

  renderItems() {
    const { isLoggedIn } = this.props;
    const { nav } = this.state;

    return (
      <HeaderNav
        mobileVisible={nav}
        onClose={() => this.setState({ nav: false })}
      >
        <HeaderNavItem>Premium</HeaderNavItem>
        <HeaderNavItem>Help</HeaderNavItem>
        {!isLoggedIn && (
          <HeaderNavItem as={Link} to="/auth/login">
            Sign In
          </HeaderNavItem>
        )}
        {isLoggedIn && this.renderAccountMenu()}
        <HeaderButton as={Link} to="/space-create">
          Create Memorial
        </HeaderButton>
      </HeaderNav>
    );
  }

  render() {
    const { nav } = this.state;

    return (
      <FluidContainer
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={[80, 98]}
        sx={{ position: 'relative' }}
      >
        <Box as={Link} to="/">
          <Box as="img" display="block" src="/logo-full.svg" alt="logo" />
        </Box>
        <Flex sx={{ display: ['flex', 'none'] }}>
          <Text
            variant="headerlink"
            onClick={() => this.setState({ nav: !nav })}
          >
            <i className="far fa-bars" />
          </Text>
        </Flex>
        {this.renderItems()}
      </FluidContainer>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  // user: PropTypes.object,
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
