import {ADD_TODO,DELETE_TODO,CHECK_TODO} from './actions'
import { todos } from './states'


export let reducer=(state = todos, action) => {
    let newTodos;
    switch (action.type) {

    case ADD_TODO:
        newTodos=[...state]
        newTodos.push(action.payload)
        return newTodos
    case DELETE_TODO:
        newTodos=[...state]
        newTodos=newTodos.filter(todo=> todo.id!==action.payload)
        return newTodos
    case CHECK_TODO:
        newTodos=[...state]
        newTodos.map(item=>{
            if (action.payload ===item.id) {
                if (item.done===true) {
                    item.done=false   
                }
                else{
                    item.done=true 
                }
            }
        })
        return newTodos
    default:
        return state
    }
}
