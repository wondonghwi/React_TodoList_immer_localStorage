import React, { useCallback, useEffect, useState } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import produce from "immer";

const App = () => {

  let initialState = localStorage.getItem('todos');

  if (!initialState) {
    initialState = localStorage.getItem('todos') || [];
  } else {
    initialState = JSON.parse(localStorage.getItem('todos') || []);
  }

  const [todos, setTodos] = useState(initialState);
  const [nextId, setNextId] = useState(Math.random().toString(36));

  const onInsert = useCallback((text) => {
    const nextTodo = {
      id: nextId,
      text,
      checked: false
    }
    setTodos(produce(todos, draft => {
      draft.push(nextTodo);
    }));
    setNextId(Math.random().toString(36));
  }, [nextId, todos]);

  const onRemove = useCallback(id => {
    setTodos(produce(todos, draft => {
      draft.splice(draft.findIndex(todo => todo.id === id), 1);
    }));
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(produce(todos, draft => {
      let todoFind = draft.find(todo => todo.id === id);
      todoFind.checked = !todoFind.checked
    }))
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
