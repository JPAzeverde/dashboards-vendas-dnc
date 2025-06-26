import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <Provider store={store}>
          <AppThemeProvider>
          <App />
          <GlobalStyle />
        </AppThemeProvider>
        </Provider>
      </React.StrictMode>
);