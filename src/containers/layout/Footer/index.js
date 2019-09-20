import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import HomeFooter from './HomeFooter';
import SimpleFooter from './SimpleFooter';

const NO_FOOTER_LINKS = ['/space-create'];

// @TODO home footer?
function Footer({ location }) {
  if (NO_FOOTER_LINKS.includes(location.pathname)) {
    return null;
  }

  return <SimpleFooter />;
}

Footer.propTypes = {
  location: PropTypes.object
};

export default withRouter(Footer);
