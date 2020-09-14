import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item.js";
import './todo-list.css';

const TodoList = ({todos, on2, onToggleImportant, onToggleDone}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
        <li key={id} className='list-group-item'>
          <TodoListItem {...itemProps}
          on1 = { () => on2(id) }
          onToggleDone = { () => onToggleDone (id) }
          onToggleImportant = { () => onToggleImportant (id) }/>
        </li>
    );
  });
  return (
      <ul className='list-group'>
        {elements}
      </ul>
  )
  };

export default TodoList;
