import './App.css';
import {useDispatch, useSelector} from "react-redux";
import ToDoItem from "./components/ToDoItem";
import {fetchTodos} from "./asyncAction/todos";


function App() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const title = useSelector(state => state.text)
    const completed = useSelector(state => state.completed)
    const changeTitle = useSelector(state => state.changeText)
    const changeId = useSelector(state => state.changeId)
    const addTask = (title) => {

        if (title.length > 0) {
            const todo = {
                title,
                id: Date.now(),
                completed:  completed?completed:!completed
            }
            dispatch({type: 'add_todo_item', payload: todo})
            dispatch({type: 'new-text', payload: ''})

        }
    }

    function updateTodo(title) {
        console.log(title)
        if (title.length > 0) {
            dispatch({type: 'updateToDo', payload: title})
        }
        dispatch({type: 'updateChanges', payload: ''})
    }

    const removeItem = (id) => {
        dispatch({type: 'remove_todo_item', payload: id})
    }

    function editTodoItem(id) {
        dispatch({type: 'edit_item', payload: id})
    }

    return (
        <div className="App">
            <div className={'appName'}>TODO LIST</div>
            <div className='addTaskField'>
                <textarea type="text" value={title}
                          onChange={(e) => dispatch({type: 'new-text', payload: e.target.value})}/>
                <div className="addTaskField-buttons">
                <button onClick={() => addTask(title)}>Добавить задачу</button>
                <button className={'button-API'} onClick={() => dispatch(fetchTodos())}>Добавить задачи из базы</button>
                </div>
                </div>

            <div className='todos'>
                <h1 >Список задач:</h1>
                {
                    todos.length > 0 ?
                        <div>
                            {todos.map((todoItem) => {
                                return (
                                    <div key={todoItem.id}>
                                        <ToDoItem text={todoItem.title} isDone={todoItem.completed}
                                                  setDone={()=>{
                                                      todoItem.completed=!todoItem.completed
                                                      dispatch({type:'change-done',payload:!completed})

                                                  }}
                                                  click={() => removeItem(todoItem.id)}
                                                  changeTitleValue={(e) => {
                                                      dispatch({type: 'change-text', payload: e.target.value})
                                                  }}
                                                  edit={(e) => {
                                                      editTodoItem(todoItem.id)
                                                  }}
                                                  saveChanges={() => updateTodo(changeTitle)}
                                                  isEdditing={changeId === todoItem.id}
                                        />
                                    </div>
                                )
                            })}
                        </div> :
                        <div style={{textAlign:'center',fontSize:'3rem',width:'700px',color:'#9090cb',margin:'0 auto'}}>Задач нет</div>
                }
            </div>

        </div>
    );
}

export default App;
