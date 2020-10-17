import React, {createContext, useContext, useState} from 'react';

const ThemeContext = createContext(null)

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true)  // to maintain the current state of theme

    function toggleTheme () {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const themeStyles = {
        backgroundColor: darkTheme? "#222": "#ddd",
        color: darkTheme? "#ddd": "#222",
        padding: '2rem',
        margin: '2rem'
    }

    const themeInformation = {
        theme: darkTheme,
        themeToggleCallback: toggleTheme,
        styles: themeStyles
    }
    return (
        <ThemeContext.Provider value={themeInformation}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export function useTheme() {
    return useContext(ThemeContext)
}
