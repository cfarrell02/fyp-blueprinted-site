import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
    primary: {
      main: '#000000', // Dark color for primary elements
    },
    secondary: {
      main: '#ffffff', // Light color for secondary elements
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1e1e1e',   // Slightly lighter background for paper-like elements
    },
    text: {
      primary: '#ffffff', // Light color for text
      secondary: '#a0a0a0', // A lighter color for secondary text
    },
  },
});

export default darkTheme;