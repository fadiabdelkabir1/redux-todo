import React,{useState} from 'react'
import './todoInput.css'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/actions'



function TodoInput() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    return (
        <div className='input'>
            <input onChange={(e)=>setName(e.target.value)} value={name} type='text' />
            <button onClick={()=>{dispatch(addTodo({name:name,id:Date.now(),done:false}));setName('')}}>add</button>
        </div>
    )
}

export default TodoInput
