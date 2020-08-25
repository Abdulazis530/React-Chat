import React from 'react'
import TodoItem from './TodoItem'
export default function TodoList(props) {
    const todos = props.data.map(item =>
        <TodoItem
            key={item.id}
            name={item.name}
            message={item.message}
            sent={item.sent}
            resend={()=>props.resend(item.id,item.name,item.message)}
            hapus={() => props.remove(item.id)}
        />)
    return (
        <ul>{todos}</ul>
    )
}