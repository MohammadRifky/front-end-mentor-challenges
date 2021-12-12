import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    console.log(todos)
    const [todosToDisplay, setTodosToDisplay] = useState(todos)
    const getActiveTodos = () => todos.filter(todo =>
        todo.isCompleted !== true)
    const getCompletedTodos = () => todos.filter(todo =>
        todo.isCompleted !== false)
    // const uncompletedTodos = getActiveTodos().length
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todosToDisplay);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        console.log(items)
        setTodosToDisplay(items);
        // useEffect(() => {
        //     console.log('Fruit', items);
        // }, [items])
    }
    return (
        <div>
            {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <ul className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                            {todosToDisplay.map((todo, index) => {
                                return (
                                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Todo key={todo.id} todoIndex={index} />
                                            </li>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext> */}
            {todos.map((todo, index) => (
                <Todo key={todo.id} todoIndex={index} />
            ))}
            {/* <div>
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
            </div> */}
        </div>
    )
}

export default TodoList
