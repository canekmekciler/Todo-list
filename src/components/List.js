import React from "react";

function List({ todo, index, markTodo, removeTodo }) {
    return (
        <div>
            <ul className="list">
                <li>
                    <span
                        style={{
                            textDecoration: todo.isDone ? "line-through" : "",
                        }}
                    >
                        {todo.event}
                    </span>
                    <span>
                        <button
                            className="done"
                            onClick={() => markTodo(index)}
                        >
                            ✓
                        </button>
                        <button
                            className="remove"
                            onClick={() => removeTodo(index)}
                        >
                            ✕
                        </button>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default List;
