import React from "react";

const TodoList = ({ todoList, setTodoList, setTodo, setEditId,inputElement }) => {

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList([...newTodoList]);
    
  };

  const editHandler = (id) => {
    const editTodo = todoList.find((todo) => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(editTodo.id);
    inputElement.current.focus()
  };

  const renderTodoList = todoList.map((todo) => {
    return (
      <ul
        className="flex w-[90vw] lg:w-[30vw] gap-1 mt-4 border-2 border-solid border-blue-400 rounded-md"
        key={todo.id}
      >
        <li className="flex-1 p-2 text-white">{todo.todo}</li>
        <button
          className="rounded-lg px-4 bg-blue-700 text-white  text-[12px] my-1"
          onClick={() => editHandler(todo.id)}
        >
          edit
        </button>
        <button
          className="rounded-lg px-4 bg-blue-700 text-white  text-[12px] my-1 mr-1"
          onClick={() => deleteHandler(todo.id)}
        >
          delete
        </button>
      </ul>
    );
  });
  return <div>{renderTodoList}</div>;
};

export default TodoList;
