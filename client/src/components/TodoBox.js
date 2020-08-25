import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'


const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'token': 'kwkakwakwk' }
});


export default class TodoBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.resendTodo = this.resendTodo.bind(this)
    }

    componentDidMount() {
        request.get('chats').then(data => {
            const completeData = data.data.map(item => {
                item.sent = true
                return item
            })

            this.setState({ data: completeData })
        })
            .catch(err => {
                console.log(err)
            })
    }
    addTodo(name, message) {
        const id = Date.now()
        this.setState((state, props) => ({
            data: [...state.data, { id, message, name, sent: true }]
        }))
        request.post('chats', {
            id,
            name,
            message
        })
            .then(data =>
                console.log(data)
            )
            .catch(err => {
                console.log(err)
                this.setState((state, props) => ({
                    data: state.data.map(item => {
                        if (item.id === id) {
                            item.sent = false
                        }
                        return item
                    })
                }))
            })
    }
    removeTodo(id) {
        this.setState((state, props) => ({
            data: state.data.filter(item => item.id !== id)
        }))
        request.delete(`chats/${id}`).then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err)
        })
    }
    resendTodo(id,name,message){
        request.post('chats', {
            id,
            name,
            message
        })
            .then(data =>{
                console.log(data)
                this.setState((state, props) => ({
                    data: state.data.map(item => {
                        if (item.id === id) {
                            item.sent = true
                        }
                        return item
                    })
                }))
            })
            .catch(err => {
                console.log(err)
                
            })
    }
    render() {
        return (
            <div>
                <TodoList data={this.state.data} remove={this.removeTodo} resend ={this.resendTodo}/>
                <TodoForm add={this.addTodo} />
            </div>

        )
    }
}