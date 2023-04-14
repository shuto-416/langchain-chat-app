import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextProps = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {}
})

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
