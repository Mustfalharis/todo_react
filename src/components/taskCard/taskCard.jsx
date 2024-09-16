import { useState } from "react";
import Space from "../Space";
import "./taskCard.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { useStore } from "../../store";
const TaskCard = () => {
  const { todos, setTodos } = useStore();
   handleDelete = (id) =>{
    setTodos(todos.filter((el) => el.id !== id));}
  return (
    <div className="todo-list">
    {todos.map((todo, index) => (
      <div className="todo-item" key={index}>
        <p>{todo.todo}</p>
        <FaDeleteLeft onClick={() => handleDelete(todo.id)} size={32} color="red" />
      </div>
    ))}
  </div>
  );
};
export default TaskCard;
