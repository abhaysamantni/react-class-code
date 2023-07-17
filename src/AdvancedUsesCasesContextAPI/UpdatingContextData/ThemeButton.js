import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
const ThemeButton = () => {
  const { theme, switchThemeHandler } = useContext(ThemeContext);
  return (
    <>
    <div>
        <p style={{color:theme === 'dark'? 'brown' : 'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <button onClick={switchThemeHandler}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
    </>
    
  );
};
export default ThemeButton;
