import React from 'react';
import {
  ThemeProvider, createMuiTheme,
} from '@material-ui/core/styles';
import { orange, grey } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
      // contrastText: grey[900],
    },
    background: {
      default: grey[200],
    },
    text: {
      primary: '#000000',
    },
  },

});
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
      due: grey[600],
      // contrastText: grey[100],
    },
    background: {
      default: grey[900],
    },
    text: {
      primary: grey[100],
    },
  },

});

function ThemeContext({ children }) {
  const { darkMode } = useSelector((state) => state.ui);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

export default ThemeContext;
