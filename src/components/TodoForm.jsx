import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);
const inputElement=useRef()
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      const updateTodo = todoList.map((editedTodo) =>
        editedTodo.id === editId
          ? (editedTodo = { id: editId, todo })
          : { id: editedTodo.id, todo: editedTodo.todo }
      );
      setTodoList(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo) {
      setTodoList([...todoList, { id: new Date().getMilliseconds(), todo }]);
    }
    setTodo("");
  };
  //   console.log(todoList);
  return (
    <div className="">
      <form action="#" onSubmit={SubmitHandler}>
        <div className="flex items-center gap-2 w-[90vw] lg:w-[30vw] ">
          <input
          ref={inputElement}
            className="w-[90%] py-2 px-4 rounded-md"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="bg-blue-700 rounded-xl px-4 py-2 font-bold text-white"
            type="submit"
          >
            {editId ? "Edit" : "Go"}
          </button>
        </div>
      </form>
      <div>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          setTodo={setTodo}
          editId={editId}
          setEditId={setEditId}
          inputElement={inputElement}
        />
      </div>
    </div>
  );
};

export default TodoForm;
