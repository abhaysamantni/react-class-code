import React, { useState } from 'react';
import LangContext from './LangContext';

const LangUpdateProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
  
    const switchLang = () => {
      setLang(lang === 'en' ? 'sp' : 'en');
    };
    return (
        <LangContext.Provider value={{
    lang,
    switchLang,
    }}>
    {children}
    </LangContext.Provider>
    );
    };
export default LangUpdateProvider    