import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodoComplete } from "../Redux/slices/todoSlice";
import "./style.css";

export default function TodoItem({ id, text, complited }) {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type="checkbox"
                checked={complited}
                onChange={() => dispatch(switchTodoComplete({ id }))}
            />

            <span
                // style={{ color: "red" }}
                className="todo"
            >
                {text}
            </span>

            <button
                type="button"
                onClick={() => dispatch(deleteTodo({ id }))}
                style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
            >
                &times;
            </button>
        </li>
    );
}
