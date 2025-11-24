import React, { useState } from "react";

export const Form = () => {
    let [task, setTask] = useState("")
    let [list, setList] = useState([])


    function handleTask(event) {
        setTask(event.target.value)
    }


    const handleFormEnter = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            return;
        }
        const newTaskItem = {
            id: Date.now(),
            text: task,
        };
        setList([...list, newTaskItem])
        setTask('');
    }


    const handleDeleteTask = (taskId) => {
        const updatedList = list.filter(taskItem => taskItem.id !== taskId);
        setList(updatedList);
    }

    return (
        <div className="todos container">
            <h1 className="title">todos</h1>
            <div className="todo-list container">

                <form onSubmit={handleFormEnter}>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="What needs to be done?" autocomplete="off" value={task} onChange={handleTask} />
                </form>

                <ul className="container">

                    {list.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button
                                className="delete-button"
                                onClick={() => handleDeleteTask(todo.id)}
                            >
                                &times;
                            </button>
                        </li>

                    ))}
                </ul>
                <p className="numero-items">{list.length} items left</p>
            </div>
        </div>
    )
}