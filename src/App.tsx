import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { MainLayout } from './MainLayout/MainLayout'
import { ThemeProvider } from './contexts/ThemeContexts'

export const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  )
}
