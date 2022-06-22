import colors from './colors';

export default {
  border: {
    radius: {
      xsmall: '4px',
      small: '8px',
      medium: '10px',
      large: '20px',
    },
  },
  font: {
    wight: {
      light: 300,
      bold: 600,
      xbold: 800,
    },
    sizes: {
      small: '14px',
      medium: '16px',
      large: '20px',
    },
  },
  colors: {
    ...colors['default'],
  },
  spacings: {
    xxsmall: '8px',
    xsmall: '10px',
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '28px',
    xxlarge: '32px',
    huge: '44px',
  },
} as const;
