import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { lightTheme,  GlobalStyle, darkTheme } from './styles/'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </React.StrictMode>
);