import React from 'react'
import TodoItem from './TodoItem'
export default function TodoList(props){
    const todos=props.data.map(item=> <TodoItem title={item.title} hapus={()=>props.remove(item.id)}/>)
    return (
     <ol>{todos}</ol>
    )
}