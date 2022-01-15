import React from 'react'
import './todoItem.css'
import {useDispatch} from 'react-redux'
import { deleteTodo,checkTodo} from '../redux/actions'
import Checkbox from '@material-ui/core/Checkbox'


function TodoItem({todo}) {
    const dispatch = useDispatch()
    const handleCheck=()=>{
        dispatch(checkTodo(todo.id))
    }
    return (
        <div className='todoitem'>
            <p className={todo.done && 'todoitem--done'}>{todo.name}</p>
            <Checkbox className='checkbox'
            checked={todo.done}
            color="primary"
            onChange={handleCheck} 
            inputProps={{ 'aria-label': 'secondary checkbox' }}  />
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button>
        </div>
    )
}

export default TodoItem
