import React from 'react'
import ReactMarkdown from 'react-markdown';


export default function ChatItem(props) {

    return (
        <li>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-1'>
                        <div className='icon-text'>
                            <p>  {props.name.slice(0, 2).toUpperCase()}</p>
                        </div>
                    </div>
                    <div className='col-sm-8'>
                        <p className='nameUser'>{props.name}</p>
                        <div className=' d-flex justify-content-start'>
                            <div className=' msg_cotainer tri-right left-top'>

                                <p> <ReactMarkdown
                                    source={props.message}
                                    escapeHtml={false}
                                /> </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-2 col-msg-time'>
                                <span className="msg_time">{props.time}</span>
                                {props.sent && <button className=' btn btn danger' onClick={props.hapus}><i className="cg-cl-del fas fa-trash-alt fa-xs"></i></button>}

                            </div>

                            <div className='col-sm-2 col-msg-time'>
                                {!props.sent && <button className='btn btn-warning' onClick={props.resend}><div className='spinner'></div>re-send</button>}
                                {!props.sent && <p className='p-resend' >network failed </p>}
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </li>

    )
} 