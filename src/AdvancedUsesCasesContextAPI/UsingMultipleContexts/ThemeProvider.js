import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const switchThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, switchThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
