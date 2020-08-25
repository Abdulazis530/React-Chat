import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.addTodo=this.addTodo.bind(this) 
        this.removeTodo=this.removeTodo.bind(this) 
    }

    addTodo(title) {
        const id =Date.now()
        this.setState((state, props) => ({
            data: [{ id,title }, ...state.data]
        }))
    }
    removeTodo(id) {
        this.setState((state, props) => ({
            data: state.data.filter(item=>item.id !== id)
        }))
    }
    render() {
        return (
            <div>
                <TodoForm  add={this.addTodo}/>
                <TodoList data={this.state.data} remove={this.removeTodo}/>
            </div>

        )
    }
}