import React,{ useEffect } from 'react'
import TodoItem from './todoItem'
import { useSelector,useDispatch } from 'react-redux'
import { filteredTodo} from '../redux/actions'


const TodoList = () => {
    const dispatch=useDispatch()
    const todos = useSelector(state => state.todos) 
    const filtereType=useSelector(state=>state.filter) 
    useEffect(()=>{dispatch(filteredTodo())},[filtereType,todos])
    const filtredTodos=useSelector(state=>state.filtredTodos)    
    return (
        <div className='itemlist'>
            {filtredTodos.map(
                todo=>{
                    return <TodoItem  key={todo.id} todo={todo} />
                }
            )}
        </div>
    )
}

export default TodoList
