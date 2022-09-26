import React from 'react';

const ToDoItem = ({text,click,edit}) => {
    return (
        <div>
            {text}
            <button onClick={click}>удалить</button>
            <button onClick={

                edit
            }>редактировать</button>
        </div>
    );
};

export default ToDoItem;