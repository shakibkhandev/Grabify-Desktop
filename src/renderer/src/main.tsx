import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalContextProvider } from './context/GlobalContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
  </React.StrictMode>
)
