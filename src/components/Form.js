import React, { useState } from "react";

function Form({ addTodos, todos }) {
    const [text, setText] = useState("");

    const onChangeInput = (event) => {
        setText(event.target.value);
    };

    const addNewEvent = (event) => {
        event.preventDefault();

        if (text === "") {
            return false;
        }

        addTodos([...todos, { event: text }]);

        setText("");
    };

    return (
        <form onSubmit={addNewEvent}>
            <div>
                <input
                    type="text"
                    value={text}
                    placeholder="What are you gonna do?"
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <button className="submit">Add Event</button>
            </div>
        </form>
    );
}

export default Form;
