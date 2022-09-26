const defaultState={
   todos:[],
    text:'',

    completed:'false',
    changeId:'false',
    changeText:''
}

export const reducer=(state=defaultState,action)=>{
    switch (action.type){
        case 'add_todo_item':
            return {...state,todos:[...state.todos,action.payload]}
        case 'add_todo_items_list':
            return {...state,todos:[...state.todos,...action.payload]}
        case 'new-text':
            return {...state,text:action.payload}
        case 'remove_todo_item':
            return {...state,todos:state.todos.filter(el=>el.id!==action.payload)}
        case 'edit_item':
            return {...state,changeId:action.payload}
        case 'change-text':
            return {...state,changeText:action.payload}
        case 'updateToDo':
            return {...state,todos:state.todos.map(el=>el.id===state.changeId? {...el,title : action.payload}:el)}

        case 'updateChanges':
            return {...state,changeId:action.payload,changeText: action.payload}
        case 'change-done':
            console.log(state.completed)
            return {...state,completed:action.payload}


        default:return state
    }
}
export const addTodoItemsListAction=(payload)=>({
    type:'add_todo_items_list',payload
})