import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import HomeFooter from './HomeFooter';
import SimpleFooter from './SimpleFooter';

function Footer({ location }) {
  if (location.pathname === '/') return <HomeFooter />;

  return <SimpleFooter />;
}

Footer.propTypes = {
  location: PropTypes.object
};

export default withRouter(Footer);
