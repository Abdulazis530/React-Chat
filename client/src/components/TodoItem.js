import React from 'react'

export default function TodoItem(props) {
    return (
        <li>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
           { !props.sent && <p style={{color:'red','fontSize':'8pt'}} >network failed </p>}
            <button className='btn btn-danger' onClick={props.sent ? props.hapus : props.resend}>{props.sent ?  'hapus':'kirim ulang'}</button>
        </li>
    )
} 