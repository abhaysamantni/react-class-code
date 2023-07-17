import ThemeContext from './ThemeContext'
import LangContext from './LangContext';
import { useContext } from "react";

const Main = () => {
  const { theme, switchThemeHandler } = useContext(ThemeContext);
  const { lang, switchLang } = useContext(LangContext);
  return (
       <div>
      <h1 style={{ color: theme === 'dark' ? 'brown' : 'grey' }}>{lang === 'en' ? 'Hello' : 'Hola'}</h1>
      <button onClick={switchLang}>Toggle Language</button>
      <button onClick={switchThemeHandler}>Toggle Theme</button>
        </div>
    
    );
    
    };

export default Main;