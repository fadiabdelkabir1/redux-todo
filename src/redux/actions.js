export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const CHECK_TODO="CHECK_TODO";
export const EDIT_TODO="EDIT_TODO";
export const FILTER_TODO="FILTER_TODO";
export const FILTRED_TODO="FILTRED_TODO";


export function addTodo(todo){
    return{
        type:ADD_TODO,
        payload:todo,
}
}
export function deleteTodo(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId,
}
}
export function checkTodo(todoId){
    return{
        type:CHECK_TODO,
        payload:todoId,
}
}

export function editTodo(todoId,newvalue){
    return{
        type:EDIT_TODO,
        payload:{todoId,newvalue}
}
}
export function filterTodo(status){
    return{
        type:FILTER_TODO,
        payload:status,
}
}
export function filteredTodo(){
    return{
        type:FILTRED_TODO,
        
}
}
