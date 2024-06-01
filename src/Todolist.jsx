import React, { useState, useEffect } from "react";
import "./index.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="flex justify-center align-middle p-8">
      <div className="bg-red-50 m-10 w-8/12">
        <h1 className="text-3xl font-bold p-5 m-7 ">Todo List</h1>
        <input
          className="shadow appearance-none border rounded 
           py-2 px-3  w-5/12 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />

        <button
          className="bg-violet-300 hover:bg-violet-500 
      px-4 m-3 rounded-md "
          onClick={addTask}
        >
          Add Task
        </button>

        <div>
          <button
            className="bg-violet-300 hover:bg-violet-500 
      px-4 m-3 rounded-md "
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="bg-violet-300 hover:bg-violet-500 
      px-4 m-3 rounded-md "
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className="bg-violet-300 hover:bg-violet-500 
      px-4 m-3 rounded-md "
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>

        <ul className="bg-blue-50">
          {filteredTasks.map((task, index) => (
            <li className=" mx-2 px-1"
           
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
               <div className="flex ">

              {task.text}
              </div>
           
              <button  className="bg-blue-300 hover:bg-blue-500 
       rounded-md mx-14 p-1  "
              onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 
       rounded-md mx-5 p-2 my-1"
              onClick={() => removeTask(index)}>Remove</button>
              <hr />
            </li> 
            

          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
