import range from 'lodash/range';

const theme = {
  colors: {
    background: '#ffffff',
    background2: '#fbfbfb',
    text: '#383a44',
    text2: '#4c4c4c',
    text3: '#7b7d85',
    highlight: '#16171d',
    link: '#4b85c4',
    danger: '#d92f2f',
    muted: '#999999',
    border: '#cccccc',
    border2: '#f0f0f0',
    border3: '#fafafa',
    borderfooter: '#ebebeb',
    primary: '#383a44',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    transparent: 'transparent'
  },
  fonts: {
    body: 'Inter, serif',
    heading: 'Inter, serif'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    black: 900,
    extrabold: 800,
    bold: 700,
    medium: 500,
    regular: 400
  },
  lineHeights: {
    body: 1.5
  },
  space: range(0, 100),
  radii: {
    default: 3,
    button: 100,
    circle: 99999
  },
  shadows: {
    card: '2px 2px 10px rgba(0, 0, 0, 0.03)',
    card2: '0px 0px 6px rgba(0, 0, 0, 0.07)'
  },
  // rebass variants
  text: {
    h1: {
      fontWeight: 'bold',
      fontSize: 45,
      lineHeight: '55px'
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 40,
      lineHeight: '60px'
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 30,
      lineHeight: '40px'
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 18
    },
    body: {
      fontWeight: 'regular',
      fontSize: 20
    },
    body2: {
      fontWeight: 'regular',
      fontSize: 18,
      lineHeight: '30px'
    },
    body3: {
      fontWeight: 'regular',
      fontSize: 18,
      lineHeight: '24px'
    },
    body4: {
      fontWeight: 'regular',
      fontSize: 16,
      lineHeight: '24px'
    },
    body5: {
      fontWeight: 'regular',
      fontSize: 13,
      lineHeight: '17px'
    },
    caption: {
      fontWeight: 'medium',
      fontSize: 11,
      lineHeight: '20px'
    },
    subtitle: {
      fontWeight: 'medium',
      fontSize: 11,
      lineHeight: '17px'
    },
    link: {
      color: 'link',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    headerlink: {
      fontSize: 15,
      fontWeight: 'medium',
      color: 'text3',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all .3s ease-in-out',
      '&:hover': {
        color: 'highlight'
      }
    },
    footerlink: {
      variant: 'text.headerlink',
      fontSize: 16,
      lineHeight: '25px',
      fontWeight: 'regular'
    }
  },
  variants: {
    imagecard: {
      bg: 'background',
      boxShadow: 'card'
    },
    card: {
      bg: 'background',
      boxShadow: 'card',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border2'
    }
  },
  buttons: {
    base: {
      borderRadius: 'button',
      boxShadow: 'card',
      transition: 'all .3s ease-in-out',
      '&:hover,:focus': {
        color: 'background',
        bg: 'highlight'
      }
    },
    primary: {
      variant: 'buttons.base',
      px: 32,
      py: 16,
      fontSize: 16,
      fontWeight: 'medium',
      lineHeight: '19px',
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'primary',
      fontWeight: 'medium',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      px: 24,
      py: 12,
      fontSize: 15,
      lineHeight: '18px'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
};

export default theme;
