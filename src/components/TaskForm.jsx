import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          placeholder="Escribe tu Trea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        ></textarea>
        <button className="bg-blue-600 px-3 py-2 text-white rounded-md w-full font-bold text-2x1" >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
