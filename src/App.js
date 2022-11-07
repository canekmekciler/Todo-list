import React, { useState } from "react";
import "./App.css";
import "./components/style.css";
import List from "./components/List";
import Form from "./components/Form";

/*
* Create todo app
  -form
  -index:text,date(later)
  -button:submit, delete
  -List
  -array
*/

function App() {
    const [todos, setTodos] = useState([
        {
            event: "Write some React today!",
            isDone: false,
        },
    ]);

    const markTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
  
    return (
        <div className="App">
            <div className="container">
                <h1> Todos </h1>
                <Form todos={todos} addTodos={setTodos} />
                {todos.map((todo, index) => (
                    <List
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <p>Subjects Do You have ({todos.length})</p>
            </div>
        </div>
    );
}

export default App;
