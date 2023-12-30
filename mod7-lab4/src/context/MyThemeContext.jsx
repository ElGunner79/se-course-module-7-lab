import React, { createContext } from 'react'

export const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const MyThemeContext = React.createContext(
    {theme: themes.light});