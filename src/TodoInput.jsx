import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    addTask(input);
    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
