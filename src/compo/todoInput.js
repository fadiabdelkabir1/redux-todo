import React,{useState} from 'react'
import './todoInput.css'
import {useDispatch} from 'react-redux'
import { addTodo,filterTodo} from '../redux/actions'
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap'




function TodoInput() {
    const [name, setName] = useState('')   

    const dispatch = useDispatch()
    const statusHandler=(e)=>{
        dispatch(filterTodo(e.target.value))  
    }

    return (
        <div className='input'>
            <input onChange={(e)=>setName(e.target.value)} value={name} type='text' />
            
            <Dropdown as={ButtonGroup} style={{width:50,height:30,marginRight: 60}}>
                
                <Button  onClick={()=>{dispatch(addTodo({name:name,id:Date.now(),done:false}));setName('')}}
                style={{width:50,height:30,borderRight:'0px',display:'flex',justifyContent:'left',alignItems:'center',borderRadius: '0px',backgroundColor:'grey',borderColor:'grey'}}>ADD</Button>
                
                <select className="form-select" onChange={statusHandler}
                style={{width:'20px !important',borderLeft:'0px',height:30,marginRight: 35,backgroundColor:'grey',borderRadius: '0px',borderColor:'grey'}}>
                    
                    <option value='done' >Finished Tasks</option>
                    <option value='notdone' >Pending Tasks</option>
                    <option value='all' >Show All</option>
                </select>
            </Dropdown>
        </div>
    )
}

export default TodoInput
