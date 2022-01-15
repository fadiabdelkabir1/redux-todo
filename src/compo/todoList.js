import React from 'react'
import TodoItem from './todoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {

    const todos = useSelector(state => state)

    return (
        <div className='itemlist'>
            {todos.map(
                todo=>{
                    return <TodoItem key={todo.id} todo={todo} />
                }
            )}
        </div>
    )
}

export default TodoList
