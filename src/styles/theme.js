import range from 'lodash/range';
import breakpoints from './breakpoints';

const theme = {
  breakpoints,
  colors: {
    brand: '#383a44',
    background: '#ffffff',
    background2: '#fbfbfb',
    text: '#383a44',
    text2: '#4c4c4c',
    text3: '#7b7d85',
    highlight: '#16171d',
    link: '#4b85c4',
    danger: '#d92f2f',
    dangerDimmed: '#FCE9E9',
    muted: '#999999',
    disabled: '#dddddd',
    border: '#cccccc',
    border2: '#f0f0f0',
    border3: '#fafafa',
    borderinput: '#DBD9DF',
    divider: '#ebebeb',
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
  sizes: {
    spacethumb: 196
  },
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
    pagetitle: {
      fontWeight: 'bold',
      fontSize: 35,
      lineHeight: '42px'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20
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
      fontWeight: 'medium',
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
    helper: {
      fontWeight: 'regular',
      fontSize: 15,
      lineHeight: '18px'
    },
    boldlink: {
      color: 'text',
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    link: {
      color: 'link',
      textDecoration: 'underline'
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
    dropdownmenu: {
      boxShadow: 'card',
      bg: 'background',
      borderRadius: 'default',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border2'
    },
    imagecard: {
      bg: 'background'
      // boxShadow: 'card'
    },
    card: {
      bg: 'background',
      boxShadow: 'card',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border2'
    },
    spacethumb: {
      width: 'spacethumb',
      height: 'spacethumb',
      borderRadius: 'default'
    },
    hasDivider: {
      '& + &': {
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'divider'
      }
    }
  },
  buttons: {
    base: {
      outline: 'none',
      borderRadius: 'button',
      boxShadow: 'card',
      transition: 'all .3s ease-in-out',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      cursor: 'pointer',
      px: 24,
      py: 12,
      fontSize: 15,
      lineHeight: '18px',
      '&:hover,:focus': {
        color: 'background',
        bg: 'highlight'
      },
      '&:disabled': {
        bg: 'disabled',
        borderColor: 'disabled',
        color: 'text',
        cursor: 'not-allowed'
      }
    },
    headerlink: {
      fontSize: 15,
      p: 0,
      fontWeight: 'medium',
      color: 'text3',
      bg: 'background',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all .3s ease-in-out',
      '&:hover': {
        color: 'highlight'
      }
    },
    primary: {
      variant: 'buttons.base',
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'primary',
      fontWeight: 'medium'
    },
    primarySquare: {
      variant: 'buttons.primary',
      fontSize: 18,
      py: 14,
      px: 30,
      borderRadius: 'default',
      fontWeight: 600
    },
    secondarySquare: {
      variant: 'buttons.secondary',
      borderColor: 'border',
      fontSize: 18,
      py: 14,
      px: 30,
      borderRadius: 'default',
      fontWeight: 600
    },
    secondarySquareSm: {
      variant: 'buttons.secondarySquare',
      px: 24,
      py: 14,
      fontSize: 16
    },
    cancel: {
      variant: 'buttons.secondarySquare',
      borderColor: 'border',
      color: 'text3',
      '&:hover,:focus': {
        bg: 'background2'
      }
    },
    home: {
      variant: 'buttons.primary',
      px: 32,
      py: 16,
      fontSize: 16,
      fontWeight: 'medium',
      lineHeight: '19px'
    }
  },
  images: {},
  forms: {
    input: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'borderinput',
      borderRadius: 'default',
      pt: 13,
      pb: 14,
      px: 17,
      fontSize: 16,
      lineHeight: '19px',
      outline: 'none'
    },
    invalidInput: {
      variant: 'forms.input',
      borderColor: 'danger',
      bg: 'dangerDimmed'
    },
    label: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '19px',
      color: 'text'
    },
    sublabel: {
      variant: 'forms.label',
      color: 'text3',
      fontWeight: 'regular'
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
