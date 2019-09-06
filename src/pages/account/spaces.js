import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box } from 'rebass';
import { MainSelectors } from 'redux/MainRedux';
import { Content } from 'containers/layout';

function Spaces({ spaces }) {
  return (
    <Content>
      {spaces.map(p => (
        <Box key={p._id}>
          <Link to={`/spaces/${p.slug}`}>{p.name}</Link>
        </Box>
      ))}
    </Content>
  );
}

Spaces.propTypes = {
  spaces: PropTypes.array
};

const mapStatesToProps = state => ({
  spaces: MainSelectors.selectSpaces(state)
});

export default connect(mapStatesToProps)(Spaces);
