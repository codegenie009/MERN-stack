import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { maxMedias } from 'styles/breakpoints';

function HeaderNav({ mobileVisible, onClose, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (mobileVisible) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [mobileVisible]);

  return (
    <Flex
      alignItems="center"
      bg="background"
      ref={ref}
      sx={{
        [maxMedias[0]]: {
          display: mobileVisible ? 'flex' : 'none',
          position: 'absolute',
          top: '100%',
          width: '100%',
          mx: -28,
          px: 28,
          py: 20,
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderTopWidth: 1,
          borderTopStyle: 'solid',
          borderTopColor: 'border2',
          '& > .m-dropdown': {
            mb: 20
          },
          '& .m-dropdown-menu': {
            position: 'relative',
            top: 0,
            px: 0,
            py: 0,
            border: 'none',
            boxShadow: 'none'
          },
          '& .m-dropdown-item': {
            color: 'text3',
            fontWeight: 'medium'
          },
          '& .m-dropdown-item:hover': {
            color: 'text',
            backgroundColor: 'background'
          }
        }
      }}
      {...rest}
    />
  );
}

HeaderNav.propTypes = {
  mobileVisible: PropTypes.bool,
  onClose: PropTypes.func
};

export default HeaderNav;
