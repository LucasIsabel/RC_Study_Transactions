export const defaultTheme = {
  colors: {
    white: '#fff',
    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',
    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',
    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
  },
  fonts: {
    primary: 'Arial, sans-serif',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
  spacings: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  boxShadow: {
    small: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    medium: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    large: '0px 16px 32px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    short: '0.3s',
    medium: '0.6s',
    long: '1s',
  },
} as const
