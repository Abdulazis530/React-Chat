import React from 'react'

export default function TodoItem(props){
    return (
        <li>{props.title}
            <button onClick={props.hapus}>hapus</button>
        </li>
    )
}