import React /*{ Component }*/ from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./todoItem.scss";

function TodoItem(props) {
  return (
    <div className={props.validate ? "todo-item validate" : "todo-item"}>
      <div className="todo-item__left" onClick={() => props.handleChange(props.id)}>
        <input type="checkbox" checked={props.validate} readOnly />
        <label className="switch-label">{props.taskName}</label>
      </div>
      <a href="#" className="delete-icon" onClick={() => props.handleDelete(props.id)}>
        <FaTrashAlt />
      </a>
    </div>
  );
}

export default TodoItem;
