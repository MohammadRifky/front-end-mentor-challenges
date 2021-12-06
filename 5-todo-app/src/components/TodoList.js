import React, { useState } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const [todosToDisplay, setTodosToDisplay] = useState(todos)
    const getActiveTodos = () => todos.filter(todo =>
        todo.isCompleted !== true)
    const getCompletedTodos = () => todos.filter(todo =>
        todo.isCompleted !== false)
    // const uncompletedTodos = getActiveTodos().length
    return (
        <div>
            <DragDropContext>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <ul className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                            {finalSpaceCharacters.map(({ id, name, thumb }) => {
                                return (
                                    <Draggable>
                                        {(provided) => (
                                            <li key={id}>
                                                ...
                                            </li>
                                        )}
                                    </Draggable>
                                )
                            })}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            {todosToDisplay.map((todo, index) => (
                <Todo key={todo.id} todoIndex={index} />
            ))}
            <div>
                <span>{getActiveTodos().length} items left</span>
                <button onClick={() => setTodosToDisplay(todos)}>
                    All
                </button>
                <button onClick={() => setTodosToDisplay(getActiveTodos())}>
                    Active
                </button>
                <button onClick={() => setTodosToDisplay(getCompletedTodos)}>
                    Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList
