"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { red } from '@mui/material/colors';
import { CacheProvider } from '@emotion/react';

import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css' });
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

const cache = createEmotionCache();

export default function Theme({ children }: { children?: React.ReactNode; }) {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}