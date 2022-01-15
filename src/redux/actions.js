export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const CHECK_TODO="CHECK_TODO";
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