import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass';
import MainActions, { MainSelectors } from 'redux/MainRedux';
import {
  FluidContainer,
  DropdownItem,
  DropdownButton,
  MagicLink
} from 'components/common';
import HeaderNav from './HeaderNav';
import HeaderNavItem from './HeaderNavItem';
import HeaderButton from './HeaderButton';

const NO_HEADER_LINKS = ['/space-create'];

class Header extends Component {
  constructor() {
    super();

    this.state = {
      nav: false
    };
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ nav: false }); // eslint-disable-line
    }
  }

  onCloseNav = this.setState({ nav: false });

  onLogout = () => {
    const { setLogout } = this.props;
    setLogout();
    this.onCloseNav();
  };

  renderAccountMenu() {
    return (
      <DropdownButton
        variant="headerlink"
        mr={33}
        label="Account"
        closeOnInsideClick
      >
        <DropdownItem as={Link} to="/">
          My Memorials
        </DropdownItem>
        <DropdownItem onClick={this.onLogout}>Log Out</DropdownItem>
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
        <HeaderNavItem
          as={MagicLink}
          href="https://help.rembrance.com/hc/en-us/articles/360034403771-What-are-the-pricing-plans-and-features-for-Rembrance-"
        >
          Pricing
        </HeaderNavItem>
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
    const { location } = this.props;

    if (NO_HEADER_LINKS.includes(location.pathname)) {
      return null;
    }

    return (
      <FluidContainer
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={[55, 98]}
        width={1}
        bg="background"
        sx={{ position: nav ? 'fixed' : 'relative', top: 0 }}
      >
        <Box as={Link} to="/">
          <Box
            as="img"
            display={['none', 'block']}
            src="/logo-full.svg"
            alt="logo"
          />
          <Box
            as="img"
            display={['block', 'none']}
            src="/logo.svg"
            alt="logo"
          />
        </Box>
        <Flex sx={{ display: ['flex', 'none'] }}>
          <Text
            variant="headerlink"
            fontSize="20px"
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
  location: PropTypes.object,
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

const enhance = compose(
  withRouter,
  connect(
    mapStatesToProps,
    mapDispatchToProps
  )
);

export default enhance(Header);
