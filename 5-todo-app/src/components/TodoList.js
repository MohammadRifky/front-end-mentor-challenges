import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoFilters, { getTodosToDisplay } from './TodoFilter';
const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const filterValue = useSelector((state) => state.todoFilter.value)
    console.log(getTodosToDisplay)
    const [todosToDisplay, setTodosToDisplay] = useState(
        getTodosToDisplay(todos, filterValue)
    )
    console.log(todosToDisplay)
    const getActiveTodos = () => todos.filter(todo =>
        todo.isCompleted !== true)
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todosToDisplay);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        console.log(items)
        setTodosToDisplay(items);
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
            {todosToDisplay.map((todo, index) => (
                <Todo key={todo.id} todoIndex={index} />
            ))}
            {/* <span>{getActiveTodos().length} items left</span> */}
            <TodoFilters />
        </div>
    )
}

export default TodoList
