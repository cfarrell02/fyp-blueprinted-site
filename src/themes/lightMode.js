import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light', // Enable light mode
    primary: {
      main: '#2196F3', // A standard primary color for light themes
    },
    secondary: {
      main: '#f50057', // A standard secondary color for light themes
    },
    background: {
      default: '#ffffff', // Light background color
      paper: '#f5f5f5',   // A slightly darker shade for paper-like elements
    },
    text: {
      primary: '#000000', // Dark color for text on light backgrounds
      secondary: '#757575', // A lighter color for secondary text
    },
  },
});

export default lightTheme;