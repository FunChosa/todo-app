import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-[#cccec3] p-4 my-2 capitalize rounded-md font-semibold`,
  liComplete: `flex justify-between bg-[#cccec3] p-4 my-2 capitalize rounded-md font-semibold line-through  `,
  row: `flex`,
  text: `ml-2 cursor-pointer max-w-[35ch] overflow-hidden text-ellipsis`,
  button: `flex items-center cursor-pointer`,
};

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={style.li + " " + (todo.completed ? style.liComplete : "")}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p className={style.text} onClick={() => toggleComplete(todo)}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo)}>
        <FaRegTrashAlt size={20} />
      </button>
    </li>
  );
}

export default Todo;
