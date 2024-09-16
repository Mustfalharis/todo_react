import { useState } from "react";
import Space from "../Space";
import "./form.css";
import {useStore} from "../../store";
const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = useStore();
  const handleAdd = () => {
    let newObj = {
      id: todos.length + 1,
      todo: newTodo,
    };
    let newList = [...todos, newObj];
    setTodos(newList);
    setNewTodo("");
  };
  return (
    <div className="form-box">
      <input 
        value={newTodo}
       onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Write Text here . . ."
      />
      <Space width={10}></Space>
      <button onClick={handleAdd}>+ Add New</button>
    </div>
  );
};

export default Form;
