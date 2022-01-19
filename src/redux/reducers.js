import {ADD_TODO,DELETE_TODO,CHECK_TODO,FILTER_TODO,FILTRED_TODO,EDIT_TODO} from './actions'
import { initialState } from './states'


export let reducer=(state = initialState, action) => {

    switch (action.type) {

    case ADD_TODO:
        return {...state,todos:[...state.todos,action.payload]}
    case DELETE_TODO:
        return {...state, todos: state.todos.filter(todo=> todo.id !== action.payload)}
    case CHECK_TODO:
        return {...state,
            todos: state.todos.map(todo=>todo.id===action.payload? {...todo,done:!todo.done}:todo )}  
    case FILTER_TODO: 
        return {...state,filter:action.payload}
    case FILTRED_TODO:
        return{...state,
            filtredTodos: state.filter==="done"? state.todos.filter(todo=>todo.done===true):
                    state.filter==="notdone"? state.todos.filter(todo=>todo.done===false):
                    state.filter==="all"? state.todos:null
        }  
    case EDIT_TODO:
        return {...state,
            todos:state.todos.map(todo=> todo.id=== action.payload.todoId? {...todo,name: action.payload.newvalue}:todo )}   
    default:
        return state
    }
}
