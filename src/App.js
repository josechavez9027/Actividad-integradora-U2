import logo from './logo.svg';
import React from "react";
import './App.css';
import { useState, useEffect } from "react";

export default function SprintPlanning() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskName || !assignedTo) return;
    const newTask = { id: Date.now(), name: taskName, assignedTo, priority, completed: false };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setAssignedTo("");
    setPriority("Medium");
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sprint Planning - Actividad Integradora</h2>
      <h2 className="text-xl font-bold mb-5">Unidad 1 - José Chávez</h2>
      <div className="mb-4">
        <input type="text" placeholder="Tarea" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="border p-2 w-full rounded mb-2" />
        <input type="text" placeholder="Responsable" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="border p-2 w-full rounded mb-2" />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 w-full rounded mb-2">
          <option value="High">Alta</option>
          <option value="Medium">Media</option>
          <option value="Low">Baja</option>
        </select>
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">Agregar Tarea</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`p-2 border-b flex justify-between items-center ${task.completed ? 'text-gray-500 line-through' : ''}`}>
            <span>{task.name} - {task.assignedTo} ({task.priority})</span>
            <div>
              {!task.completed && <button onClick={() => completeTask(task.id)} className="text-green-500 mr-2">✔</button>}
              <button onClick={() => deleteTask(task.id)} className="text-red-500">✖</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
