import React,{useState} from 'react'
import './todoItem.css'
import {useDispatch} from 'react-redux'
import { deleteTodo,checkTodo,editTodo} from '../redux/actions'
import Checkbox from '@material-ui/core/Checkbox'
import {Button} from 'react-bootstrap'


function TodoItem({todo}) {
    const [editable, setEditable] = useState(false)
    const [newvalue, setNewvalue] = useState(todo.name)
    
    const dispatch = useDispatch()
    const handleCheck=()=>{
        dispatch(checkTodo(todo.id))
    }
    return (
        <div className='todoitem'style={{display:'flex'}} >
            {editable?  <input type="text" className='input' onChange={(e)=>setNewvalue(e.target.value)}
            value={newvalue} style={{width:'600px',height:'30px'}}/>:<p  className={todo.done && 'todoitem--done'}>{todo.name}</p>}
            
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                <Checkbox className='checkbox'
                checked={todo.done}
                color="primary"
                onChange={handleCheck} 
                inputProps={{ 'aria-label': 'secondary checkbox' }}  />
                <Button  onClick={()=>dispatch(deleteTodo(todo.id))} style={{width:50,height:30,marginRight: 5,borderRadius: 10,display:'flex',backgroundColor:'grey',borderColor:'grey',justifyContent:'center',alignItems:'center'}}>DEL</Button>
                <Button 
                onClick={()=> {
                    dispatch(editTodo(todo.id,newvalue))
                    if (editable){setNewvalue(todo.name)};
                        setEditable(!editable)}}  
                style={{width:50,height:30,marginRight: 5,borderRadius: 10,display:'flex',backgroundColor:'grey',borderColor:'grey',justifyContent:'center',alignItems:'center'}}>
                    {editable? 'UPDATE':'EDIT'}</Button>
            </div>
        </div>
    )
}

export default TodoItem
