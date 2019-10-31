import React from 'react';

export const themes = {
    light: {
        foreground:"red",
        background:"red"
    },
    dark:{
        foreground:"red",
        background:"green"
    }
};
export const thenmeContext = React.createContext(
    themes.dark
)