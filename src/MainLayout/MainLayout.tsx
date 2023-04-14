import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ChatList } from '../ChatList/components'
import { Header } from '../Header/components'
import { SideMenuBar } from '../SideMenuBar/components'
import { ThemeContext } from '../contexts/ThemeContexts'

export const MainLayout = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`theme-${theme}`}>
      <SideMenuBar />
      <Header />
      <div className='main-page'>
        <Routes>
          <Route path='/' element={<ChatList />} />
          {/*<Route path='/chat/:id' element={<ChatList />} />*/}
        </Routes>
      </div>
    </div>
  )
}
