import {addTodoItemsListAction} from "../store/reducer";

export const fetchTodos=()=>{
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                dispatch(addTodoItemsListAction(json))
            })
    }
}