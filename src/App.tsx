import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ChatList } from './ChatList/components'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatList />} />
        {/*<Route path='/chat/:id' element={<ChatList />} />*/}
      </Routes>
    </BrowserRouter>
  )
}
