import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clear, decrement, increment } from "./Redux/slices/countSlice";
import TodoList from "./components/TodoList";

import { addTodo } from "./Redux/slices/todoSlice";
import "./app.css";

function App() {
    // counter
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    // todo
    const [text, setText] = useState("");

    // ф-ция для добавления тасок
    const addTask = () => {
        dispatch(addTodo({ text }));
        setText("");
    };

    return (
        <>
            <div>{count}, hello world</div>
            <div className="btnBlock">
                <button type="button" onClick={() => dispatch(increment())}>
                    +1
                </button>
                <button type="button" onClick={() => dispatch(decrement())}>
                    -1
                </button>
                <button type="button" onClick={() => dispatch(clear())}>
                    0
                </button>
            </div>

            <div>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={addTask} type="button">
                    Add todo
                </button>

                <TodoList />
            </div>
        </>
    );
}

export default App;
