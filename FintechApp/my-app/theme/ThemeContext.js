import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const lightTheme = {
    dark: false,
    colors: {
        primary: '#000',
        background: '#fff',
        card: '#fff',
        text: '#000',
        border: '#ccc',
        notification: '#f50057',
        iconBackground: '#f3f1ef',
        icon: 'blue',
        navBar: '#f3f1ef',
    },
};

const darkTheme = {
    dark: true,
    colors: {
        primary: '#fff',
        background: '#15161E',
        card: '#000',
        text: '#fff',
        border: '#5C5D68',
        notification: '#ff4081',
        iconBackground: '#393434',
        icon: 'blue',
        navBar: '#222332'
    },
};

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.dark ? lightTheme : darkTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
