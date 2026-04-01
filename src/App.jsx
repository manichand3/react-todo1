import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleTask() {
    setList((prev) => [
      ...prev,
      { id: Date.now(), name: input, status: false },
    ]);
    setInput("");
  }
  console.log(list);
  function handleDelete(id) {
    console.log(id);
    setList(list.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    const updated = list.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setList(updated);
  }
  function handleEdit(id) {
    const newTask = prompt();
    const updatedList = list.map((item) => {
      return item.id === id ? { ...item, name: newTask } : item;
    });
    setList(updatedList);
  }
  console.assert.log(list);

  function handleFliter(fun) {
    let updatedList;
    if (fun === "handlePending") {
      updatedList = list.filter((item) => {
        return item.status === false && item;
      });
    } else if (fun === "handleComplete") {
      updatedList = list.filter((item) => {
        return item.status === true;
      });
    } else if (fun === "all") {
      return list;
    }

    setList(updatedList);
  }
  return (
    <div className="mt-10 flex-3 ">
      <div className="m-3">
        <button
          onClick={() => {
            handleEdit("all");
          }}
          className="bg-black text-amber-50 rounded-2xl p-2 ml-2"
        >
          all
        </button>
        <button
          onClick={() => {
            handleFliter("handlePending");
          }}
          className="bg-black text-amber-50 rounded-2xl p-2 ml-2"
        >
          pending
        </button>
        <button
          onClick={() => {
            handleFliter("handleComplete");
          }}
          className="bg-black text-amber-50 rounded-2xl p-2 ml-2"
        >
          completed
        </button>
      </div>
      <div>
        <input
          className="p-2 bg-amber-200 rounded-2xl"
          value={input}
          onChange={handleInput}
          placeholder="enter your task"
        ></input>
        <button
          className="bg-black text-amber-50 rounded-2xl p-2 ml-2"
          onClick={handleTask}
        >
          add task
        </button>
      </div>
      {list.map((task, id) => (
        <div className="flex " key={id}>
          <p
            className=" p-2 m-2"
            onClick={() => {
              handleToggle(task.id);
            }}
          >
            {task.status ? "☑" : "☐"} {task.name}
          </p>
          <button
            className="bg-amber-700 text-amber-200 rounded-xl p-2 m-2"
            onClick={() => {
              handleEdit(task.id);
            }}
          >
            edit
          </button>
          <button
            className="bg-amber-700 text-amber-200 rounded-xl p-2 m-2"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
