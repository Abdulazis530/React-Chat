import React from 'react'
import ChatItem from './ChatItem'
export default function ChatList(props) {
    const chats = props.data.map((item,index) =>
    
        <ChatItem
            index={index}
            key={item.id}
            name={item.name}
            message={item.message}
            sent={item.sent}
            resend={()=>props.resend(item.id,item.name,item.message)}
            hapus={() => props.remove(item.id)}
            time={item.time}
        />)
    return (
        <ul>{chats}</ul>
    )
}