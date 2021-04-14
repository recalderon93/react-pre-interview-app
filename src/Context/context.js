import React from 'react';
import store from 'Store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from './themeContext';

export default function Context({ children }) {
  return (
    <Provider store={store}>
      <Router>
        <ThemeContext>
          {children}
        </ThemeContext>
      </Router>
    </Provider>
  );
}
