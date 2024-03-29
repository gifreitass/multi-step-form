import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createGlobalStyle } from 'styled-components'
import store from './store'
import { Provider } from 'react-redux/es/exports'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Ubuntu-Regular, sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
)
