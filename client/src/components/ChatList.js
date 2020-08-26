import React from 'react'
import ChatItem from './ChatItem'
export default function ChatList(props) {
    const chats = props.data.map(item =>
        <ChatItem
            key={item.id}
            name={item.name}
            message={item.message}
            sent={item.sent}
            resend={()=>props.resend(item.id,item.name,item.message)}
            hapus={() => props.remove(item.id)}
        />)
    return (
        <ul>{chats}</ul>
    )
}