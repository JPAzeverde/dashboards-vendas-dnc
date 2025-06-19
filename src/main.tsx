import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {   GlobalStyle, /*darkTheme,*/ lightTheme } from './styles/'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </React.StrictMode>
);