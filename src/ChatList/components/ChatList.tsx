import React from 'react'
import { Link } from 'react-router-dom'

import { chats } from '../lib/chatlist.lib'

export const ChatList = (): JSX.Element => {
  return (
    <div>
      <h1>Chat List</h1>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
