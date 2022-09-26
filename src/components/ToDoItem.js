import React from 'react';
import './ToDoItem.css'
import icon from '../assets/icons8.png'
import deleteIcon from '../assets/icons8-delete-64.png'
import saveIcon from '../assets/1492790860-8check_84164.png'

const ToDoItem = ({text, click, edit, isEdditing, saveChanges, changeTitleValue,isDone,setDone}) => {
    return (
        <div>

            {isEdditing ?
                <div className={'toDoItem'}>
                    <textarea
                        onChange={changeTitleValue}
                    >{text}</textarea>
                    <button className={'editButton'} onClick={saveChanges}><img src={saveIcon} alt={'save'}/></button>
                </div> :
                <div className={isDone?'toDoItem'  :"toDoItem toDoItem-done"}>
                    <div className={'check'}  onClick={setDone}>
                        {isDone? null:'V'}
                    </div>
                    {text}
                    <div className={'toDoItem-controls'}>
                        <button onClick={click}><img src={deleteIcon} alt={'delete'}/></button>
                        <button onClick={edit}><img src={icon} alt={'edit'}/></button>
                    </div>
                </div>
            }
        </div>
    );
};

export default ToDoItem;