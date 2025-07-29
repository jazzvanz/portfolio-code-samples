import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { tokens } from './constants/tokens'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={tokens}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
